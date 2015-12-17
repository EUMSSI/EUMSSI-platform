#!/usr/bin/env python

'''
This preprocessing module does mapping from wikipedia event to eumssi schema
'''
import sys
import datetime
import json
from DW_converter import DWConverter
import click

def transf_date(x):
    '''convert from string to date, formated: Y-m-d'''
    try:
        return datetime.datetime.strptime(x[:10], "%Y-%m-%d")
    except ValueError:
        return None

def transf_source(sourcelist):
    url = ""
    for item in sourcelist:
        if 'url' in item and url=="":
            url = item['url']
    print "here media url ", url
    return url

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
article_map = [
    ['date', 'datePublished', transf_date, []],
    ['language', 'inLanguage', None, []],
    ['source', 'websiteUrl', transf_source, []],
    ['name', 'headline', None, ['text']],
    ['type', 'type', None, []],
    ['duration', 'duration', None, []],
    ['details.permaLink', 'websiteUrl', None, []],
    ['details.teaser', 'teaser', None, ['text']],
    ['text', 'text', None, ['text']]
]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
@click.option('--video', is_flag=True, help="convert dw video data")
def convert(reset, clean, video):
    conv = None
    if video:
        conv = DWConverter('DW-MediaCenter-api', 'DW video', dw_video_map)
    else:
        conv = DWConverter('DW-MediaCenter-api', 'DW audio', dw_audio_map)

    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()

if __name__ == '__main__':
    convert()
    