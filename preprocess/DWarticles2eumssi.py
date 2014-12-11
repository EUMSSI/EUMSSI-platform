#!/usr/bin/env python

import datetime
import json
from eumssi_converter import EumssiConverter
import click
import re
import html2text


def split_keywords(x):
    return re.split(',\s*', x)


def strip_html(x):
    try:
        return html2text.html2text(x)
    except Exception as e:
        print e
        print x
        return x


'''
mapping in the form [<original_fieldname>, <eumssi_fieldname>, <transform_function>, [<available_data>,..]}
'''
dw_article_map = [
    ['DISPLAYDATE', 'datePublished', None, []],
    ['AUTHOR', 'author', None, []],
    ['inLanguage', 'inLanguage', None, []],
    ['KEYWORDS', 'keywords', split_keywords, []],
    ['TITLE', 'headline_html', None, ['text']],
    ['CLOBTEXT', 'text_html', None, ['text']],
    ['TEASER', 'description_html', None, ['text']],
    ['TITLE', 'headline', strip_html, ['text']],
    ['CLOBTEXT', 'text', strip_html, ['text']],
    ['TEASER', 'description', strip_html, ['text']],
    # ['SHORTTEASER', 'description_html', None, ['text']],
    # ['LONGTEASER', 'text_html', None, ['text']],
    # ['SHORTTITLE', 'text_html', None, ['text']],
    # ['PROGRAMTITLE', 'text_html', None, ['text']],
    # ['TOPICTEASER', 'text_html', None, ['text']],
    # ['TOPICTEXT', 'text_html', None, ['text']],
    # ['TOPICTITLE', 'text_html', None, ['text']]
]


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def convert(reset, clean):
    conv = EumssiConverter('DW-article', dw_article_map)
    if reset:
        conv.reset()
    if clean:
        conv.clean()
    conv.run()


if __name__ == '__main__':
    convert()
