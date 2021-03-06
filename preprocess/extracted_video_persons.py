#!/usr/bin/env python

from extract_converter import ExtractConverter
import click
import json


def convert(x):
  available_data = ['video_persons']
  meta = {}
  try:
    meta['amalia'] = x['result']['Amalia_Json']
    available_data.append('video_persons-amalia')
  except Exception as e:
    print "no Amalia data:", e
  try:
    meta['thumbnails'] = [p['url'] for p in x['result']['Video_Thumbnails']]
    print meta['thumbnails']
    meta['thumbnails-json'] = [json.dumps(p) for p in x['result']['Video_Thumbnails']]
    available_data.append('video_persons-thumbnails')
  except Exception as e:
    print "no Thumbnail data:", e
  return meta, available_data


@click.command()
@click.option('--reset', is_flag=True, help="reset data_available")
@click.option('--clean', is_flag=True, help="reset data_available and remove existing meta.source")
def run(reset, clean):
    conv = ExtractConverter('video_persons', convert)
    conv.run()


if __name__ == '__main__':
    run()
