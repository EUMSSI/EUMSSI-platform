#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests
import sys, os
from os.path import isdir, join
import urllib2
from bs4 import BeautifulSoup


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
      
  def find_item(self, item):
    try: 
      cursor = self.col.find({'meta.original.id': item['id']})
      for i in cursor:
        return i
    except Exception as e:
      print "exception: " , e
      return None
    return None #otherwise
'''
Extract items and insert to DB
'''
def fetch_data(duplicatecheck):    
  ''' default values '''
  total = 0
  for y in range(2010, 2016):
    icounter = 0
    host = "http://wikitimes.l3s.de/webresources/WebService/getEvents/json/" + str(y) + "-01-01/" + str(y) + "-12-31"
    try:
      print host
      content = urllib2.urlopen(host).read()
      
      print "here"
      itemset = json.loads(content)
      #write data to mongo db
      writer_wiki = ItemWriter('Wikipedia Events','Wikipedia Events')   
      
      for item in itemset:
        tmp = None
        if duplicatecheck=='1':
          tmp = writer_wiki.find_item(item)
        if tmp is None:
          item['language'] = "en"
          icounter+=1
          writer_wiki.write_item(item)
        else:
          print 'item ', item['reference']['id'], 'exists in db already!'
    except Exception as e:
      print e
      
      


if __name__ == '__main__':
  print '!-----------------------------------------------------'
  print '!@usage: python [me] duplicatecheck\n\t--duplicatecheck:1 (check),0 (no check)'
  print '!-----------------------------------------------------'
  
  duplicatecheck = sys.argv[1]
  print 'Now fetching Wikipedia event data with the duplicate check option: ', duplicatecheck
  fetch_data(duplicatecheck)
