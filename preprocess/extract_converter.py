import pymongo
import time


class ExtractConverter:

    # separator used to flatten hierarchical fields (corresponds to
    # dot-notation)
    SEPARATOR = '###'
    SLEEP_TIME = 10  # wait ten seconds if no data to process

    def __init__(self, queue, convert_func):
        ''' initialize DB connection and create indexes '''
        self.queue = queue
        self.convert = convert_func
        mongo_client = pymongo.MongoClient()
        db = mongo_client['eumssi_db']
        self.col = db['content_items']
        self.col.create_index("processing.available_data")
        print "created index processing.available_data"

    def get_items(self):
        ''' get items to convert '''
        project = {'result': '$processing.results.{queue}'.format(queue=self.queue)}
        pipeline = [{'$match': {'processing.queues.{queue}'.format(queue=self.queue): 'processed',
                              'processing.available_data': {'$ne': self.queue}}},
                    {'$project': project}]
        return self.col.aggregate(pipeline, cursor={})


    def put_item(self, item_id, meta, available_data):
        ''' write extracted meta to MongoDB '''
        try:
            available_data = set(available_data)
            available_data.add(self.queue)
            print "updated: ", self.col.update({'_id': item_id},
                                               {'$set': {'meta.extracted.{queue}'.format(queue=self.queue): meta},
                                                '$addToSet': {'processing.available_data': {'$each': list(available_data)}}})
        except Exception as e:
            print e


    def run(self):
        '''run converter, continuously converting new items'''
        prev_time = time.time()
        items = self.get_items()
        while True:
            if not items.alive:  # no items to process
                elapsed_time = time.time()-prev_time
                # only sleep if processing the batch took less than SLEEP_TIME seconds
                sleep_time = max(0, self.SLEEP_TIME-elapsed_time)
                print "\nNO MORE ITEMS, sleeping for {time} seconds\n".format(time=sleep_time)
                time.sleep(sleep_time)
                prev_time = time.time()
                items = self.get_items() # get new items
            for item in items:
                extracted_meta, available_data = self.convert(item)
                self.put_item(item['_id'], extracted_meta, available_data)
