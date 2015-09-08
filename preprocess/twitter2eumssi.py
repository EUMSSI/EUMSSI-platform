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
    return x  # TODO: figure out how to represent this correctly

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
twitter_map = [
    ['created_at', 'datePublished', transf_date, []],
    ['lang', 'inLanguage', None, []],
    ['text', 'text', None, ['text']],
    ['user.id_str', 'author', None, []],
    ['id_str', 'tweetId', None, []],
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
