#!/usr/bin/env python

from textwrap import TextWrapper

import uuid
import ConfigParser
import pymongo
import json
from datetime import datetime

class StatusWriter():
  status_wrapper = TextWrapper(width=60, initial_indent='    ', subsequent_indent='    ')
  mongo_client = pymongo.MongoClient()
  db = mongo_client['eumssi_test']
  col = db['content_items']

  def write_status(self, status):
    ''' write tweet to MongoDB '''
    try:
      twuid = uuid.uuid4()
      try:
        print self.status_wrapper.fill(status['text'])
        print '\n %s  %s  via %s\n' % (status['user']['screen_name'], status['created_at'], status['source'])
      except Exception as e:
        print e
      print "inserted: ", self.col.insert({'_id':uuid.uuid4(),'source':'Twitter-DW','meta':{'original':status, 'original_format':'twitter-api-1.1'}})
    except Exception as e:
      print e

def main():
  writer = StatusWriter()
  for line in open('tweets.txt','r'):
    status = json.loads(line)
    for f in (u'_id',u'dw_campaign_match',u'dw_streaming_session_id'): # remove internal DW field
      status.pop(f,None)
    ctime = datetime.utcfromtimestamp(status['created_at']['sec']) # convert date format
    status['created_at'] = ctime
    uctime = datetime.utcfromtimestamp(status['user']['created_at']['sec']) # convert date format
    status['user']['created_at'] = ctime
    writer.write_status(status)

if __name__ == '__main__':
  main()
