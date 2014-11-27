#!/usr/bin/env python

import datetime
import json
from eumssi_converter import EumssiConverter


def transf_date(x):
    # convert from timestamp in milliseconds
    return datetime.datetime.utcfromtimestamp(json.loads(x)['$date'] / 1000)


def transf_lang(x):
    '''normalize language codes to ISO 639-1'''
    return x
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
dw_video_map = [
    ['publicationDate', 'datePublished', transf_date, []],
    ['language', 'inLanguage', transf_lang, []],
    ['httpHigh', 'httpHigh', None, ['video']],
    ['httpMedium', 'httpMedium', None, ['video']],
    ['tags', 'keywords', None, []],
    ['title', 'headline', None, ['text']]
]


def main():
    conv = EumssiConverter('DW-video', dw_video_map)
    conv.run()

if __name__ == '__main__':
    main()
