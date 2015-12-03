#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests
import sys, os
from os.path import isdir, join
import urllib2


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
      print "inserted: ", self.col.insert({'_id':uuid.uuid4(),'source':self.source,'meta':{'original':item, 'original_format':self.format}})
    except Exception as e:
      print e

'''
Extract items and insert to DB
'''
def fetch_data(language):    
  code = 2
  number_of_page = 351
  if language == 'es':
    code = 28
    number_of_page = 247
  if language == 'de':
    code = 1
    number_of_page = 296
  if language == 'fr':
    code = 13
    number_of_page = 21
    
  for i in range(1, number_of_page+1):
    host = "http://www.dw.com/api/list/mediacenter/" + str(code) + "?pageIndex=" + str(i)
    itemset = json.loads(urllib2.urlopen(host).read())
    #write data to mongo db
    writer = ItemWriter('DW video','DW-MediaCenter-api')   
    icounter = 0
    for item in itemset['items']:
      item['language'] = language
      icounter+=1
      print icounter, " item indexed "
      writer.write_item(item)

if __name__ == '__main__':
  language = sys.argv[1]
  fetch_data(language)