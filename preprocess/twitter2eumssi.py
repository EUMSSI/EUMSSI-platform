#!/usr/bin/env python

import datetime
from eumssi_converter import EumssiConverter
import click


def transf_date(x):
    if x.__class__ == datetime.datetime:
        return x
    else:
        # Twitter's weird date format
        return datetime.datetime.strptime(x, '%a %b %d %X +0000 %Y')


def transf_coordinates(x):
    return '{},{}'.format(x[1],x[0])  # http://geojson.org/ [lon,lat] -- switch to Lat-Lon for Solr

def transf_hashtag(tag_list):
    return [tag['text'] for tag in tag_list]

def transf_url(url_list):
    return [url['expanded_url'] for url in url_list]

def transf_user(user_list):
    return [user['screen_name'] for user in user_list]

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
twitter_map = [
    ['created_at', 'datePublished', transf_date, []],
    ['lang', 'inLanguage', None, []],
    ['text', 'text', None, ['text']],
    ['user.screen_name', 'author', None, []],
    ['id_str', 'tweetId', None, []],
    ['entities.hashtags', 'hashtags', transf_hashtag, []],
    ['entities.user_mentions', 'userMentions', transf_user, []],
    ['entities.urls', 'urlMentions', transf_url, []],
    ['coordinates.coordinates', 'contentLocation', transf_coordinates, []]
]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def convert(reset, clean):
    conv = EumssiConverter('twitter-api-1.1', twitter_map, coll_name="tweets")
    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()

if __name__ == '__main__':
    convert()
