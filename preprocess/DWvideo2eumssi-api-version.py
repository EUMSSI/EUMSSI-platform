#!/usr/bin/env python

import datetime
import json
from eumssi_converter import EumssiConverter
import click

def transf_date(x):
    '''convert from string in DD.MM.YYYY (or YYYY-MM-DD) format from 2014-03-06T12:27:14Z format T%H:%M:%SZ'''

    try:
        return datetime.datetime.strptime(x[:10], "%d.%m.%Y")
    except ValueError:
        return datetime.datetime.strptime(x[:10], "%Y-%m-%d")

def transf_lang(x):
    '''normalize language codes to ISO 639-1'''
    lang_map = {
        'german': 'de',
        'english': 'en',
        'spanish': 'es',
        'french': 'fr'  # doesn't actually appear in the data
    }
    return lang_map.get(x, x)

def transf_source(sourcelist):
    mediaurl = ""
    for item in sourcelist:
        if 'url' in item and mediaurl=="":
            mediaurl = item['url']
        if 'quality' in item and 'url' in item and item['quality']=='High':
            mediaurl = item['url']
    print "here media url ", mediaurl
    return mediaurl

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
dw_video_map = [
    ['displayDate', 'datePublished', transf_date, []],
    ['language', 'inLanguage', transf_lang, []],
    ['details.mainContent.sources', 'mediaurl', transf_source, ['url']],
    ['name', 'headline', None, ['title']],
    ['type', 'type', None, ['type']],
    ['duration', 'duration', None, ['duration']],
    ['details.permaLink', 'websiteUrl', None, ['url']],
    ['details.teaser', 'text', None, ['text']
    ]
]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def convert(reset, clean):
    conv = EumssiConverter('DW-MediaCenter-api', dw_video_map)
    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()

if __name__ == '__main__':
    convert()
