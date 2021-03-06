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
      cursor = self.col.find({'meta.original.reference.id': item['reference']['id']})
      for i in cursor:
        return "1"
    except Exception as e:
      print "exception: " , e
      return None

def get_number_of_page(code):
  host = "http://www.dw.com/api/list/mediacenter/" + str(code) + "?pageIndex=1"
  geninf = json.loads(urllib2.urlopen(host).read())
  return geninf['paginationInfo']['availablePages']

def getFullText(url):
  r = urllib2.urlopen(url)
  httpcont = r.read()
  soup = BeautifulSoup(httpcont, 'html.parser')
  intro = soup.findAll('p', {'class': 'intro'})
  text = soup.findAll('div', {'class': 'longText'})

  result = ""
  if len(intro)>0:
    result += intro[0].text
  if len(text)>0:
    result += text[0].text
  return result

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
      writer_video = ItemWriter('DW video','DW-MediaCenter-api')   
      writer_audio = ItemWriter('DW audio','DW-MediaCenter-api')   
      for item in itemset['items']:
        tmp = None
        if duplicatecheck=='1':
          tmp = writer.find_item(item)
        if tmp is None:
          item['language'] = language
          icounter+=1
          itemdetail = json.loads(urllib2.urlopen(item['reference']['url']).read())
          item['details'] = itemdetail
          item['text'] = getFullText(itemdetail['permaLink'])
          if len(item['text'])<100: #exceptional case
            item['text'] = item['teaserText']
          if 'type' in item:
            if item['type']=='AudioTeaser':
              writer_audio.write_item(item)
            else:
              if item['type']=='VideoTeaser':
                writer_video.write_item(item)
        else:
          print 'item ', item['reference']['id'], 'exists in db already!'
    except Exception as e:
      print host
      print e
      
      


if __name__ == '__main__':
  print '!-----------------------------------------------------'
  print '!@usage: python [me] language duplicatecheck\n!\t--language: en,es,fr,de\n!\t--duplicatecheck:1 (check),0 (no check)'
  print '!-----------------------------------------------------'
  language = sys.argv[1]
  duplicatecheck = sys.argv[2]
  print 'Now fetching data for ', language, ' with the duplicate check option: ', duplicatecheck
  fetch_data(language, duplicatecheck)
