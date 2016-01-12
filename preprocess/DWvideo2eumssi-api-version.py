#!/usr/bin/env python

import sys
import datetime
import json
from DW_converter import DWConverter
import click

def transf_date(x):
    '''convert from string in DD.MM.YYYY (or YYYY-MM-DD) format from 2014-03-06T12:27:14Z format T%H:%M:%SZ'''

    try:
        return datetime.datetime.strptime(x[:19], "%Y-%m-%dT%H:%M:%S")
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
    print "Media url ", mediaurl
    return mediaurl

def transf_keywords(itemlist):
    kws = []
    print len(itemlist)

    for item in itemlist[0]:
        print item
        if 'name' in item and 'type' in item and item['type']=='SearchRef':
            kws.append(item['name'])
    print "found this keywords: ", kws
    return kws
'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
dw_video_map = [
    ['displayDate', 'datePublished', transf_date, []],
    ['language', 'inLanguage', transf_lang, []],
    ['details.mainContent.sources', 'mediaurl', transf_source, ['video', 'audio']],
    ['name', 'headline', None, ['text']],
    ['type', 'type', None, []],
    ['duration', 'duration', None, []],
    ['details.permaLink', 'websiteUrl', None, []],
    ['details.teaser', 'teaser', None, ['text']],
    ['details.referenceGroups.items', 'keywords', transf_keywords, []],
    ['text', 'text', None, ['text']]
]

dw_audio_map = [
    ['displayDate', 'datePublished', transf_date, []],
    ['language', 'inLanguage', transf_lang, []],
    ['details.mainContent.sources', 'mediaurl', transf_source, ['audio']],
    ['name', 'headline', None, ['text']],
    ['type', 'type', None, []],
    ['duration', 'duration', None, []],
    ['details.permaLink', 'websiteUrl', None, []],
    ['details.teaser', 'teaser', None, ['text']],
    ['details.referenceGroups.items', 'keywords', transf_keywords, []],
    ['text', 'text', None, ['text']]

]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
@click.option('--video', is_flag=True, help="convert dw video data")
def convert(reset, clean, video):
    conv = None
    if video:
        print '=====Processin video'
        conv = DWConverter('DW-MediaCenter-api', 'DW video', dw_video_map)
    else:
        print '=====processing audio'
        conv = DWConverter('DW-MediaCenter-api', 'DW audio', dw_audio_map)

    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()

if __name__ == '__main__':
    print "==Converting DWVideo2 eumssi api version"
    convert()
    