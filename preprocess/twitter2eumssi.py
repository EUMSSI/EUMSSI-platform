#!/usr/bin/env python

import datetime
from eumssi_converter import EumssiConverter

def transf_date(x):
    if x.__class__==datetime.datetime:
        return x
    else:
        return datetime.datetime.strptime(x,'%a %b %d %X +0000 %Y') #Twitter's weird date format

def transf_lang(x):
    return x #Twitter uses two character ISO codes

def transf_coordinates(x):
    return x #TODO: figure out how to represent this correctly

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
twitter_map = [
    ['created_at', 'datePublished', transf_date, []],
    ['lang', 'inLanguage', None, []],
    ['text', 'text', None, ['text']],
    ['user.id_str', 'author', None, []],
    ['coordinates.coordinates','contentLocation', transf_coordinates, []]
]

def main():
  conv = EumssiConverter('twitter-api-1.1',twitter_map)
  conv.run()

if __name__ == '__main__':
  main()
