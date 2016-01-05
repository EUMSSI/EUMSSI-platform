#Crawler using GET method from YouTubeVideo

#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests
import sys, os
from os.path import isdir, join
from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser
import urllib, urllib2




apikey="AIzaSyB9w6XgZjwAdkTD3OBlOBUn-2OrStM-WUw"
# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
DEVELOPER_KEY = apikey
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"
YOUTUBE_VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos?key=" + apikey + "&part=snippet,contentDetails,statistics,status,recordingDetails,status"
COMMENT_URL = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&key=" + apikey
_param_data_source = YOUTUBE_API_SERVICE_NAME + "-" + YOUTUBE_API_VERSION
YOUTUBE_URL_BASE = "https://www.youtube.com/watch?v="

class StatusWriter():
  mongo_client = pymongo.MongoClient()
  db = mongo_client['eumssi_db']
  col = db['content_items']

  def write_status(self, item, source):
    ''' write video meta to Mongodb '''
    #check if it does not exist
    existence = self.col.find({"meta.original.id": item["id"]}).count()
    if existence ==0:
        try:
          twuid = uuid.uuid4()
          print "inserted: ", self.col.insert({'_id':uuid.uuid4(),'source': source,'meta':{'original':item, 'original_format':'gdata-api-v102014'}})
        except Exception as e:
          print e






def youtube_search(options):

  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)
  print youtube
  print "start searching for videos here..."


  # Call the search.list method to retrieve results matching the specified
  # query term.
  search_response = youtube.search().list(
    q=options.q,
    part="id,snippet",
    order=options.r,
    maxResults=options.max_results
  ).execute()

  videos = []
  channels = []
  playlists = []
  
  
  vids = []
  # Add each result to the appropriate list, and then display the lists of
  # matching videos, channels, and playlists.
  for search_result in search_response.get("items", []):
    if search_result["id"]["kind"] == "youtube#video":
      videos.append("%s (%s)" % (search_result["snippet"]["title"],
                                 search_result["id"]["videoId"]))
      vids.append(search_result["id"]["videoId"])
  print "Videos:\n", "\n".join(videos), "\n"
  return vids




#META: https://www.googleapis.com/youtube/v3/videos?id={videoId}&key={YOUR_API_KEY}&part=snippet,contentDetails,statistics,status,recordingDetails,status
#COMMENT:  https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=aw4LnKEOYrM&key={YOUR_API_KEY}

def getVideoMeta(vid):
    try:
        url_to_request = YOUTUBE_VIDEO_URL + "&id=" + vid
        comments_to_request = COMMENT_URL + "&videoId=" + vid 
        print url_to_request
        meta =  urllib2.urlopen(url_to_request).read()
        video_item = json.loads(meta)
        video_item["url"] = YOUTUBE_URL_BASE + vid
        video_item["id"] = vid
        print comments_to_request
        
        comment_items = []
        while True:
            try:
                commentThreads = urllib2.urlopen(comments_to_request).read()
                comments = json.loads(commentThreads)
                comment_items += comments["items"]
                if ('nextPageToken' in comments):
                    pageToken= comments["nextPageToken"]
                    if not pageToken is None and len(pageToken) >10 :
                        comments_to_request = COMMENT_URL + "&videoId=" + vid  + "&pageToken=" + comments["nextPageToken"] 
                else:
                    break
            except:
                print "Error in getting coments"
                break

          
        video_item["comments"] = comment_items
         #return itemset
        #write data to mongo db
        writer = StatusWriter()   
        writer.write_status(video_item, _param_data_source)
    except:
        print "unexpected error in get Video Meta "
        

'''
Extract items from Youtube and insert to DB
'''
def writeVideoData(_param_data_folder, _param_data_source):
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



if __name__ == "__main__":
  print "\nUsage: using --q for search term and --r for ranking (date,relevance*,rating,viewCount)"
  argparser.add_argument("--q", help="Search term", default="energy")
  argparser.add_argument("--r", help="Ranking by", default="relevance")
  argparser.add_argument("--max-results", help="Max results", default=50)
  args = argparser.parse_args()
  print 'start'
  try:
    vids = youtube_search(args)
    for id in vids:
        print "now get video " + id
        getVideoMeta(id)
  except HttpError, e:
    print "An HTTP error %d occurred:\n%s" % (e.resp.status, e.content)

