#!/usr/bin/env python

from textwrap import TextWrapper

import uuid
import ConfigParser
import pymongo
from twython import TwythonStreamer

class EumssiStreamer(TwythonStreamer):
  status_wrapper = TextWrapper(width=60, initial_indent='    ', subsequent_indent='    ')
  mongo_client = pymongo.MongoClient()
  db = mongo_client['eumssi_db']
  col = db['tweets']
  col.create_index("source")
  print "created index source"
  col.create_index("processing.queues.metadata")
  print "created index processing.queues.metadata"


  def on_success(self, status):
    ''' write tweet to MongoDB '''
    try:
      twuid = uuid.uuid4()
      try:
        print self.status_wrapper.fill(status['text'])
        print '\n %s  %s  via %s\n' % (status['user']['screen_name'], status['created_at'], status['source'])
      except Exception as e:
        print e
      print "inserted: ", self.col.insert({'_id':uuid.uuid4(),'source':'Twitter','meta':{'original':status, 'original_format':'twitter-api-1.1'},'processing':{'queues':{'metadata':{'pending'}}}})
    except Exception as e:
      print e

  def on_error(self, status_code, data):
    '''
    just keep going when something fails
    should handle errors somehow (reconnect?)
    '''
    print 'An error has occured! Status code = %s' % status_code

  def on_timeout(self):
    print 'Snoozing Zzzzzz'

def main():
  # get twitter credentials from configuration file
  config = ConfigParser.SafeConfigParser()
  config.read('credentials.cfg')
  consumer_key = config.get('Twitter', 'consumer_key')
  consumer_secret = config.get('Twitter', 'consumer_secret')
  access_token = config.get('Twitter', 'access_token')
  access_token_secret = config.get('Twitter', 'access_token_secret')


  # load filter list for twitter
  config = ConfigParser.SafeConfigParser()
  config.read('client.cfg')
  try:
    follow_list = config.get('Twitter', 'follow_list')
  except ConfigParser.NoOptionError:
    follow_list = None
  try:
    track_list = config.get('Twitter', 'track_list')
  except ConfigParser.NoOptionError:
    track_list = None
  if follow_list: # convert user names to user ids
    follow_list = [u for u in follow_list.split(',')]
    userid_list = []
    username_list = []
    for user in follow_list:
      if user.isdigit():
        userid_list.append(user)
      else:
        username_list.append(user)
    for username in username_list:
      user = tweepy.API().get_user(username)
      userid_list.append(user.id)
    follow_list = ",".join(userid_list)
  else:
    follow_list = None
  stream = EumssiStreamer(consumer_key,consumer_secret, access_token, access_token_secret)
  stream.statuses.filter(follow=follow_list,track=track_list)


if __name__ == '__main__':
  main()
