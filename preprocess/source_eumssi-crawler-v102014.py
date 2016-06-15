#!/usr/bin/env python

import pymongo
import time
import datetime
from eumssi_converter import EumssiConverter

def transf_date(x):
    if x=="": #no date information
        x= "1900-01-01 00:00:00.0" #fake date for empty-location, should be aware of that when using
    if x.__class__==datetime.datetime:
        return x
    else:
        return datetime.datetime.strptime(x[:-2],'%Y-%m-%d %H:%M:%S') #2014-02-24 17:57:12.0 for example

def transf_lang(lang):
    return lang.lower() 

def transf_source(sourceLabel):
    if sourceLabel.find("lemonde") >-1:
        return "Le Monde"
    if sourceLabel.find("Zeit") >-1:
        return "Zeit"
    if sourceLabel.find("elpais") >-1:
        return "El Pais"
    if sourceLabel.find("Guardian") >-1:
        return "Guardian"
    return sourceLabel #in other cases

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''

news_map = [
    ['publisheddate', 'datePublished', transf_date, []],
    ['language', 'inLanguage', transf_lang, []],
    ['link', 'websiteUrl', None, ['url']],
    ['content', 'text', None, ['text']],
    ['page', 'page', None, ['htmlsource']],
    ['description', 'description', None, ['text']],
    ['author','author',None,[]],
    ['title','headline',None,['text']],
    ['sourceLabel','publisher',transf_source,[]],
]


def main():
  conv = EumssiConverter('eumssi-crawler-v102014',news_map)
  conv.run()
  
if __name__ == '__main__':
  main()
