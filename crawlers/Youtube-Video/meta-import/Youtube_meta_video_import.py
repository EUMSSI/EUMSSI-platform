#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests
import sys, os
from os.path import isdir, join

class StatusWriter():
  mongo_client = pymongo.MongoClient()
  db = mongo_client['eumssi_test']
  col = db['content_items']

  def write_status(self, item, source):
    ''' write video meta to Mongodb '''
    try:
      twuid = uuid.uuid4()
      print "inserted: ", self.col.insert({'_id':uuid.uuid4(),'source': source,'meta':{'original':item, 'original_format':'gdata-api-v102014'}})
    except Exception as e:
      print e

'''
Extract items from Youtube and insert to DB
'''
def readYoutubeData(_param_data_folder, _param_data_source):
    itemset = {}
    for keyword in os.listdir(_param_data_folder):
        if not os.path.isdir(join(_param_data_folder, keyword)):
          continue
        folder = join(_param_data_folder, keyword)
        for f in os.listdir(folder):
            if f.endswith(".json") and not f.startswith("."):
                print "Importing", folder + "/"  + f
                fi = open (join(folder, f), 'r')  
                #parse that file
                jsoncontent = fi.read()
                parsed = json.loads(jsoncontent)
                #get items
                if "items" in parsed["data"]:
                    for item in parsed["data"]["items"]:
                        id = item["id"]
                        if not id in itemset:
                            itemset[id] = item
                fi.close()

    print "Infor: ", len(itemset), " video found"
    
    #write to file (for LIUM)
    _write_to_file = False
    if _write_to_file:
        with open(_param_data_folder + "/video.txt", "w") as fo:
            for item in itemset:
                url = ""
                if "6" in itemset[item]["content"]:
                    url = itemset[item]["content"]['6']
                elif "1" in itemset[item]["content"]:
                    url = itemset[item]["content"]['1']
                if len(url)>0:
                    print url
                    fo.write(item + "\t")
                    fo.write(url + "\n")

    #return itemset
    #write data to mongo db
    writer = StatusWriter()   
    for item in itemset:
        writer.write_status(itemset[item], _param_data_source)

if __name__ == '__main__':
  _param_data_folder = "/Work/EUMSSI/data/youtube/general-jsonraw"
  #_param_data_folder = sys.argv[1]
  _param_data_source = "Youtube-video-GeneralChannel-EN"
  readYoutubeData(_param_data_folder, _param_data_source)
