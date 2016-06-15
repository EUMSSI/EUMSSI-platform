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
            break
    return url

def transf_entity_dbpedia(entitylist):
    ents  = []
    for item in entitylist:
        if 'wikiURL' in item:
            tmp = item['wikiURL'].split("/")
            ents.append(tmp[len(tmp)-1])
    print ents
    return ents
def transf_keywords(entitylist):
    kws = []
    for item in entitylist:
        if 'name' in item:
            kws.append(item['name'])
    return kws

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
article_map = [
    ['date', 'datePublished', transf_date, []],
    ['language', 'inLanguage', None, []],
    ['source', 'websiteUrl', transf_source, []],
    ['entity', 'dbpedia_all', transf_entity_dbpedia, []],
    ['entity', 'keywords', transf_keywords, []],
    ['description', 'text', None, ['text']]
]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def convert(reset, clean):
    conv = DWConverter('Wikipedia Events', 'Wikipedia Events', article_map)

    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()

if __name__ == '__main__':
    convert()
    