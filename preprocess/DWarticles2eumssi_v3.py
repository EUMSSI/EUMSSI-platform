#!/usr/bin/env python

import datetime
import json
from eumssi_converter import EumssiConverter
import click

def transf_date(x):
    '''convert from string in DD.MM.YYYY (or YYYY-MM-DD) format from 2014-03-06T12:27:14Z format'''

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

'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
dw_a_map = [
    ['dateText', 'datePublished', transf_date, []],
    ['inLanguage', 'inLanguage', None, []],
    ['tags', 'keywords', None, []],
    ['title', 'headline', None, ['text']],
    ['websiteUrl', 'websiteUrl', None, ['url']],
    ['avURLs.http.high', 'mediaurl', None, ['url']],
    ['durationText', 'duration', None, ['durationText']],
    ['description', 'text', None, ['text']]
]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def convert(reset, clean):
    conv = EumssiConverter('DW-fracking-manual-data', dw_a_map)
    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()

if __name__ == '__main__':
    convert()
