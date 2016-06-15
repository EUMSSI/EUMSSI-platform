#this code is to import the news import from DW in MAY 2015 release

#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests
import sys, os
from os.path import isdir, join


class ItemWriter:

  def __init__(self, source, meta_format):
    self.mongo_client = pymongo.MongoClient()
    self.db = self.mongo_client['eumssi_db']
    self.col = self.db['content_items']
    self.source = source
    self.format = meta_format

  def write_item(self, item):
    ''' write item to MongoDB '''
    try:
      twuid = uuid.uuid4()
      print "inserted: ", self.col.insert({'_id':uuid.uuid4(),'source':self.source,'meta':{'original':item, 'original_format':self.format},'processing':{'queues':{'metadata':'pending'}}})
    except Exception as e:
      print e

'''
Extract items and insert to DB
'''
def readJsonData(_param_data_file, language):    
    fi = open (_param_data_file, 'r')  
    #parse that file
    jsoncontent = fi.read()
    itemset = json.loads(jsoncontent)
    #get items
    print "Infor: ", len(itemset), " news articles found"
    #write data to mongo db
    writer = ItemWriter('DW article','DW-fracking-manual-data')   
    i = 0
    for item in itemset:
        i+=1
        print i, " item indexed "
        item['inLanguage'] = language
        writer.write_item(item)

if __name__ == '__main__':
  print "@usage: python [me] @data_file @language"
  _param_data_file = sys.argv[1]
  language = sys.argv[2]
  readJsonData(_param_data_file, language)
