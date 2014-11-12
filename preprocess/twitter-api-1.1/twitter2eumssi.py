#!/usr/bin/env python

import pymongo
import time

SLEEP_TIME=60 # wait one minute if no data to process

class TwitterConverter():
  mongo_client = pymongo.MongoClient()
  db = mongo_client['eumssi_test']
  col = db['content_items']

  def get_items(self, limit=1000):
    return self.col.find({'source_meta.format':'twitter-api-1.1','source_meta.eumssi': {'$exists':False}},fields=['source_meta.original'],limit=limit)

  def put_item(self, item_id, eumssi_meta):
    ''' write eumssi_meta tweet to MongoDB '''
    try:
      print "updated: ", self.col.update({'_id':item_id},{'$set':{'source_meta.eumssi':eumssi_meta}})
      #print item_id
      #print eumssi_meta
    except Exception as e:
      print e

  def convert(self, original):
    e = {} # eumssi
    o=original # shortcut
    try: e['datePublished']   = o['created_at']
    except Exception: pass
    try: e['inLanguage']      = o['lang']
    except Exception: pass
    try: e['text']            = o['text']
    except Exception: pass
    try: e['author']          = o['user']['id_str']
    except Exception: pass
    try: e['contentLocation'] = o['coordinates']['coordinates']
    except Exception: pass
    return e

def main():
  conv = TwitterConverter()
  while(True):
    items = conv.get_items()
    print items.count()
    if items.count() == 0: # no items to process
      print "\n\n\nNO MORE ITEMS, sleeping for {time} seconds\n\n\n".format(time=SLEEP_TIME)
      time.sleep(SLEEP_TIME)
    for item in items:
      eumssi_meta = conv.convert(item['source_meta']['original'])
      conv.put_item(item['_id'],eumssi_meta)

if __name__ == '__main__':
  main()
