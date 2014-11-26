import pymongo
import time

class EumssiConverter:

  SEPARATOR='###' # separator used to flatten hierarchical fields (corresponds to dot-notation)
  SLEEP_TIME=60 # wait one minute if no data to process

  def __init__(self, source_format, mapping):
    self.source_format = source_format
    self.mapping = mapping
    mongo_client = pymongo.MongoClient()
    db = mongo_client['eumssi_db']
    self.col = db['content_items']
    self.col.create_index("meta.original_format")
    print "created index meta.original_format"
    self.col.create_index("processing.available_data")
    print "created index processing.available_data"

  def get_items(self, limit=5):
    #return self.col.find({'meta.original_format': source_format,'processing.available_data': "metadata"},fields=['meta.original'],limit=limit)
    project = {}
    for f in self.mapping:
        project[f[0].replace('.',self.SEPARATOR)] = '$meta.original.'+f[0] # flatten document structure (note: maintains inner structure of fields)
    pipeline = [{'$match':{'meta.original_format': self.source_format,'processing.available_data': {'$ne':"metadata"}}},{'$limit':limit},{'$project':project}] #limit doesn't seem to work
    return self.col.aggregate(pipeline,cursor={})

  def put_item(self, item_id, eumssi_meta, available_data):
    ''' write eumssi_meta tweet to MongoDB '''
    try:
      print "updated: ", self.col.update({'_id':item_id},{'$set':{'meta.source':eumssi_meta},'$addToSet':{'processing.available_data': {'$each':available_data}}})
      #print item_id
      #print item_id, eumssi_meta, available_data
    except Exception as e:
      print e

  def convert(self, original):
    converted = {} # eumssi
    available_data = ['metadata']
    for m in self.mapping:
        org_field=m[0]
        new_field=m[1]
        transform=m[2]
        flags=m[3]
        try:
            converted[new_field] = original[org_field.replace('.',self.SEPARATOR)]
            if transform:
                converted[new_field] = transform(converted[new_field])
            available_data.extend(flags)
        except Exception as ex:
            pass #ignore missing fields
    return converted, available_data

  def reset(self):
      '''reset available_data field to reprocess all items'''
      self.col.update({'meta.original_format': self.source_format},{$unset:{'processing.available_data':1}})

  def clean(self):
      '''reset available_data field to reprocess all items'''
      self.col.update({'meta.original_format': self.source_format},{$unset:{'processing.available_data':1,'meta.source':1}})

  def run(self):
    while(True):
      items = self.get_items()
      #print items.count()
      if not items.alive: # no items to process
        print "\n\n\nNO MORE ITEMS, sleeping for {time} seconds\n\n\n".format(time=self.SLEEP_TIME)
        time.sleep(SLEEP_TIME)
      for item in items:
        eumssi_meta, available_data = self.convert(item)
        self.put_item(item['_id'],eumssi_meta,available_data)
