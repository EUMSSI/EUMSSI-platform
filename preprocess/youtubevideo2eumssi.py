#!/usr/bin/env python

import pymongo
import time
import datetime
from eumssi_converter import EumssiConverter

def transf_date(x):
    if x.__class__==datetime.datetime:
        return x
    else:
        try:
            return datetime.datetime.strptime(x,'%Y-%m-%dT%H:%M:%S.000Z') #2010-09-16T19:05:54.000Z for example
        except ValueError:
            return datetime.datetime.strptime(x[:9], "%Y-%m-%d")
    

def transf_lang(lang): 
    #by default, we only look for en videos, however,
    # it may contains other languages, it needs to detect automatically later
    return "en" 


'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''

youtube_video_map = [
['id', 'youtubeVideoID', None, []],
['uploaded', 'datePublished', transf_date, []],
['language', 'inLanguage', transf_lang, []],
['content.5', 'httpHigh', None, ['video']],
['content.1', 'rtspLow', None, ['video']],
['content.6', 'rtspHigh', None, ['video']],
['description', 'text', None, ['text']],
['title', 'headline', None, ['text']],
['duration', 'duration', None, ['duration']],
['rating', 'rating', None, ['duration']],
['ratingCount', 'numberOfRating', None, ['rating']],
['uploader', 'author', None, []],
['commentCount', 'numberOfComments', None, []],
['likeCount', 'numberOfLikes', None, []],
['favoriteCount', 'numberOfFavorites', None, []],
['viewCount', 'numberOfViews', None, []],
['category', 'category', None, []]
]


def main():
  conv = EumssiConverter('gdata-api-v102014',youtube_video_map)
  conv.run()
  
if __name__ == '__main__':
  main()
