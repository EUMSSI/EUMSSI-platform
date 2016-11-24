#!/usr/bin/env python

import pymongo
import time
import datetime
from eumssi_converter import EumssiConverter

def transf_date(x):
    x = x[0]['snippet']['publishedAt']
    if x.__class__==datetime.datetime:
        return x
    else:
        try:
            return datetime.datetime.strptime(x,'%Y-%m-%dT%H:%M:%S.000Z') #2010-09-16T19:05:54.000Z for example
        except ValueError:
            return datetime.datetime.strptime(x[:9], "%Y-%m-%d")
    

def transf_lang(lang): 
    # no language field in metadata, just assume English
    return "en" 

'''
return comments as list of strings
'''
def transf_comments(comments):
  eumssi_comments = [] 
  for item in comments:
    cm = {}
    cm['author'] = item['snippet']['topLevelComment']['snippet']['authorDisplayName']
    cm['publishedAt'] = item['snippet']['topLevelComment']['snippet']['publishedAt']
    cm['updatedAt'] = item['snippet']['topLevelComment']['snippet']['updatedAt']
    cm['content'] = item['snippet']['topLevelComment']['snippet']['textDisplay']
    eumssi_comments.append(cm['author'] + '(' + cm['publishedAt'] + '): ' + cm['content'])
  return eumssi_comments

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
youtube_video_map = [
['id', 'youtubeVideoID', None, []],
['url', 'mediaurl', None, ['video']],
['items', 'datePublished', transf_date, []],
['items', 'headline', lambda x: x[0]['snippet']['title'], ['text']],
['items', 'text', lambda x: x[0]['snippet']['description'], ['text']],
['items', 'inLanguage', transf_lang, []], # no language field available, use dummy
['items', 'numberOfComments', lambda x: x[0]['statistics']['commentCount'], []],
['items', 'numberOfLikes', lambda x: x[0]['statistics']['likeCount'], []],
['items', 'numberOfFavorites', lambda x: x[0]['statistics']['favoriteCount'], []],
['items', 'numberOfViews', lambda x: x[0]['statistics']['viewCount'], []],
['items', 'author', lambda x: x[0]['snippet']['channelTitle'], []],
['comments', 'comments', transf_comments, []]
]

def main():
  conv = EumssiConverter('youtube-v3',youtube_video_map,sleep_time=600)
  #conv = EumssiConverter('Youtube',youtube_video_map)
  conv.run()
  
if __name__ == '__main__':
  main()
