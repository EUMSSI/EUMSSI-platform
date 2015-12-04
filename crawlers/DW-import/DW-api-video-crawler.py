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
      
  def find_item(self, item):
    try: 
      cursor = self.col.find({'meta.original.reference.id': item['reference']['id']})
      for i in cursor:
        return i
    except Exception as e:
      print "exception: " , e
      return None

def get_number_of_page(code):
  host = "http://www.dw.com/api/list/mediacenter/" + str(code) + "?pageIndex=1"
  geninf = json.loads(urllib2.urlopen(host).read())
  return geninf['paginationInfo']['availablePages']

'''
Extract items and insert to DB
'''
def fetch_data(language, duplicatecheck):    
  ''' default values '''

  code = 2
  if language == 'es':
    code = 28
  if language == 'de':
    code = 1
  if language == 'fr':
    code = 13
  number_of_page = get_number_of_page(code)  
  if number_of_page is None:
    return
  icounter = 0
  for i in range(1, number_of_page+1):
    host = "http://www.dw.com/api/list/mediacenter/" + str(code) + "?pageIndex=" + str(i)
    try:
      itemset = json.loads(urllib2.urlopen(host).read())
      #write data to mongo db
      writer = ItemWriter('DW video','DW-MediaCenter-api')   
      for item in itemset['items']:
        tmp = None
        if duplicatecheck:
          tmp = writer.find_item(item)
        if tmp is None:
          item['language'] = language
          icounter+=1
          itemdetail = json.loads(urllib2.urlopen(item['reference']['url']).read())
          item['details'] = itemdetail
          writer.write_item(item)
        else:
          print 'item ', item['reference']['id'], 'exists in db already!'
    except Exception as e:
      print host
      print e
      return
      


if __name__ == '__main__':
  print '!-----------------------------------------------------'
  print '!@usage: python [me] language duplicatecheck\n!\t--language: en,es,fr,de\n!\t--duplicatecheck:True,False'
  print '!-----------------------------------------------------'
  language = sys.argv[1]
  duplicatecheck = sys.argv[2]
  fetch_data(language, duplicatecheck)
