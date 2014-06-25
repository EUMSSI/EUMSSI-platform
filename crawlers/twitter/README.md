# Twitter streaming client

This is a client that follows twitter streams and writes the collected tweets to MongoDB according to the EUMSSI platform format.

## Installation

### prerequisites
- Python >= 2.7  
- virtualenv  
- EUMSSI platform (MongoDB)

### setup
```bash
cd crawlers/twitter
. bin\activate
pip install -r requirements
```

## Use
- create `credentials.cfg` with Twitter credentials (MongoDB credentials not supported yet)
 - see credentials-example.cfg
- set list of of terms to track and users to follow in client.cfg
 - (user following not tested yet)
- run `python twitter_stream.py`
 - should run continuously (needs to be ensured manually so far)
 - later versions of the EUMSSI platform should have support to register modules that run in the background
