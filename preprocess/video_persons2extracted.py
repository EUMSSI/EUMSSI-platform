#!/usr/bin/env python

from extract_converter import ExtractConverter
import click


def convert(x):
    meta = {
        #meta['all'] = [w['item'] for w in x['result']['content']]
        'amalia': x['result']['Amalia_Json']
    }
    available_data = ['video_persons']
    return meta, available_data


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def run(reset, clean):
    conv = ExtractConverter('video_persons', convert)
    conv.run()


if __name__ == '__main__':
    run()
