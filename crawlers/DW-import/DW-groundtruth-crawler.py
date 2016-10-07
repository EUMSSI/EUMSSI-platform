#!/usr/bin/env python

import uuid
import ConfigParser
import pymongo
import json
import requests
import sys
import os
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
            print "inserted: ", self.col.insert({'_id': uuid.uuid4(), 'source': self.source, 'meta': {'original': item, 'original_format': self.format}, 'processing': {'queues': {'metadata': 'pending'}}})
        except Exception as e:
            print e

    def find_item_id(self, item_id):
        try:
            cursor = self.col.find({'meta.original.reference.id': item_id})
            for i in cursor:
                return "1"
        except Exception as e:
            print "exception: ", e
            return None


def getFullText(url):
    r = urllib2.urlopen(url)
    httpcont = r.read()
    soup = BeautifulSoup(httpcont, 'html.parser')
    intro = soup.findAll('p', {'class': 'intro'})
    text = soup.findAll('div', {'class': 'longText'})
    result = ""
    if len(intro) > 0:
        result += intro[0].text
    if len(text) > 0:
        result += text[0].text
    return result


'''
Extract items and insert to DB
'''


def fetch_data():
    writer = ItemWriter('DW evaluation', 'DW-MediaCenter-api')
    for item_id in(6522524, 17267752, 6527132, 16853891, 6529359, 16795025):
        print 'importing item', item_id
        tmp = None
        tmp = writer.find_item_id(item_id)  # check for duplicate
        if tmp is None:
            item = {}
            item['language'] = 'en'  # only EN in ground truth
            dw_url = 'http://www.dw.com/api/detail/video/' + str(item_id)
            print dw_url
            result = requests.get(dw_url).text
            itemdetail = json.loads(result)
            item['details'] = itemdetail
            item['displayDate'] = itemdetail['displayDate']
            for source in itemdetail['mainContent']['sources']:
                if source['quality'] == 'High':
                    item['httpHigh'] = source['url']
                if source['quality'] == 'Medium':
                    item['httpMedium'] = source['url']
            if not 'httpHigh' in item.keys():
                item['httpHigh'] = item['httpMedium']
                print 'item ', item_id, 'has no high quality video'
            item['name'] = itemdetail['name']
            item['text'] = getFullText(itemdetail['permaLink'])
            if len(item['text']) < 100:  # exceptional case
                print 'item ', item_id, 'has too little text!'
                item['text'] = itemdetail['teaser']
            writer.write_item(item)
        else:
            print 'item ', item_id, 'exists in db already!'


if __name__ == '__main__':
    print '!-----------------------------------------------------'
    print '!@usage: python [me] '
    print '!-----------------------------------------------------'
    fetch_data()
