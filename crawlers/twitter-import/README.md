# Twitter streaming client

This is a script that imports tweets from a file dump (one line per tweet in JSON format) and writes the collected tweets to MongoDB according to the EUMSSI platform format.
Note: the created_at and user.created_at fields are stored as a datetime (or ISODate), whereas the standard Twitter format is a string. The user.created_at field is in the original string format.

## Installation

### prerequisites
- Python >= 2.7  
- virtualenv  
- EUMSSI platform (MongoDB)

### setup
```bash
cd crawlers/twitter_import
. bin\activate
pip install -r requirements
```

## Use
- run `python twitter_import.py`
 - tweet dump should be in file `./tweets.txt`
 - run once (manually) to import full dump
