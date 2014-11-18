#!/usr/bin/env python

import pymongo
import time

SLEEP_TIME=60 # wait one minute if no data to process

class DWvideoConverter():

  def __init__(self):
    self.mongo_client = pymongo.MongoClient()
    self.db = mongo_client['eumssi_test']
    self.col = db['content_items']
    self.col.create_index("meta.original_format")
    self.col.create_index("processing_state.available_data")

  def get_items(self, limit=1000):
    return self.col.find({'meta.original_format':'DW-video','processing_state.available_data': "metadata"},fields=['meta.original'],limit=limit)

  def put_item(self, item_id, eumssi_meta):
    ''' write eumssi_meta tweet to MongoDB '''
    try:
      print "updated: ", self.col.update({'_id':item_id},{'$set':{'meta.source':eumssi_meta},'addToSet':{'processing_state.available_data': "metadata"}})
      #print item_id
      #print eumssi_meta
    except Exception as e:
      print e

  def convert(self, original):
    e = {} # eumssi
    o=original # shortcut
    try: e['datePublished']   = o['dateText'] #TODO: date field needs to be parsed properly and converted, maybe use publicationDate
    except Exception: pass
    try: e['inLanguage']      = o['language'] #may need language code normalization
    except Exception: pass
    try: e['text']            = o['description']
    except Exception: pass
    #try: e['author']          = o['user']['id_str'] doesn't seem to have author field
    #except Exception: pass
    try: e['httpHigh'] = o['httpHigh']
    except Exception: pass
    try: e['httpMedium'] = o['httpMedium']
    except Exception: pass
    try: e['keywords'] = o['tags']
    except Exception: pass
    try: e['headline'] = o['title']
    except Exception: pass
    return e

def main():
  conv = DWvideoConverter()
  while(True):
    items = conv.get_items()
    print items.count()
    if items.count() == 0: # no items to process
      print "\n\n\nNO MORE ITEMS\n\n\n"
      return #TODO: remove return statement to allow for continuous updates
      time.sleep(SLEEP_TIME)
    for item in items:
      eumssi_meta = conv.convert(item['meta']['original'])
      conv.put_item(item['_id'],eumssi_meta)

if __name__ == '__main__':
  main()
