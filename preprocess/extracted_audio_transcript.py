#!/usr/bin/env python

import datetime
import json
from extract_converter import ExtractConverter
import click


def convert(x):
    meta = " ".join([w['item'] for w in x['result']['content']])
    available_data = ['audio_transcript']
    return meta, available_data


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def run(reset, clean):
    conv = ExtractConverter('audio_transcript', convert)
    conv.run()


if __name__ == '__main__':
    run()
