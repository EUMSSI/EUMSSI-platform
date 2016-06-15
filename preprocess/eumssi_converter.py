import pymongo
import time


class EumssiConverter:

    # separator used to flatten hierarchical fields (corresponds to
    # dot-notation)
    SEPARATOR = '###'
    SLEEP_TIME = 10  # wait ten seconds if no data to process

    def __init__(self, source_format, mapping, db_name="eumssi_db", coll_name="content_items"):
        ''' initialize DB connection and create indexes '''
        self.source_format = source_format
        self.mapping = mapping
        mongo_client = pymongo.MongoClient()
        db = mongo_client[db_name]
        self.col = db[coll_name]
        self.col.create_index("meta.original_format")
        print "created index meta.original_format"
        self.col.create_index("processing.available_data")
        print "created index processing.available_data"
        self.col.create_index("processing.queues.metadata")
        print "created index processing.queues.metadata"


    def get_items(self):
        ''' get items to convert '''
        project = {}
        for f in self.mapping:
            # flatten document structure (note: maintains inner structure of fields)
            project[f[0].replace('.', self.SEPARATOR)] = '$meta.original.' + f[0]
        pipeline = [{'$match': {'meta.original_format': self.source_format,
                                'processing.queues.metadata': 'pending'}},
                    {'$project': project}]
        return self.col.aggregate(pipeline, cursor={})

    def put_item(self, item_id, eumssi_meta, available_data):
        ''' write eumssi_meta to MongoDB '''
        try:
            print "updated: ", self.col.update({'_id': item_id},
                                               {'$set': {'meta.source': eumssi_meta, 'processing.queues.metadata': 'processed'},
                                                '$addToSet': {'processing.available_data': {'$each': available_data}}})
        except Exception as e:
            print e

    def convert(self, original):
        '''convert metadata to eumssi format'''
        converted = {}  # eumssi
        available_data = ['metadata']
        for m in self.mapping:
            org_field = m[0]
            new_field = m[1]
            transform = m[2]
            flags = m[3]
            try:
                if org_field.replace('.', self.SEPARATOR) in original:
                    converted[new_field] = original[
                        org_field.replace('.', self.SEPARATOR)]
                    if transform:
                        converted[new_field] = transform(converted[new_field])
                    available_data.extend(flags)
            except Exception as e:
                print e
        return converted, available_data

    def reset(self):
        '''reset available_data field to reprocess all items'''
        self.col.update({'meta.original_format': self.source_format},
                        {'$unset': {'processing.available_data': 1}},
                        multi=True)

    def clean(self):
        '''reset available_data field and clear existing converted metadata to reprocess all items'''
        self.col.update({'meta.original_format': self.source_format},
                        {'$unset': {'processing.available_data': 1, 'meta.source': 1}},
                        multi=True)

    def run(self):
        '''run converter, continuously converting new items'''
        prev_time = time.time()
        items = self.get_items()
        while(True):
            if not items.alive:  # no items to process
                elapsed_time=time.time()-prev_time
                # only sleep if processing the batch took less than SLEEP_TIME seconds
                sleep_time=max(0,self.SLEEP_TIME-elapsed_time)
                print "\nNO MORE ITEMS, sleeping for {time} seconds\n".format(time=sleep_time)
                time.sleep(sleep_time)
                prev_time=time.time()
                items = self.get_items() # get new items
            for item in items:
                eumssi_meta, available_data = self.convert(item)
                self.put_item(item['_id'], eumssi_meta, available_data)
