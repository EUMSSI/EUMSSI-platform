#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests

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

def main():
  batch_size=1000
  langs=['de_DE','fr_FR','es_ES','en_GB']
  for lang in langs:
    core = 'core_'+lang
    writer = ItemWriter('DW-'+lang,'DW-article')
    start_id='*'
    done=False
    while not done:
      r=requests.get('http://localhost:8080/Solr_EUMSSI_DW/{core}/select'.format(core=core),params={'q':'*:*','sort':'ID asc','wt':'json','rows':batch_size,'fq':'{nocache}ID:{{{id} TO *]'.format(nocache='{!cache=false}',id=start_id),'indent':'true'})
      print r
      parsed=r.json()
      if parsed['response']['numFound'] == 0:
        done = True
        break
      start_id=parsed['response']['docs'][-1]['ID']
      for d in parsed['response']['docs']:
        writer.write_item(d)

if __name__ == '__main__':
  main()
