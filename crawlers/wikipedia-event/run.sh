COUNTER=0
while [  $COUNTER -lt 100000 ]; do
    python wikipedia-event-crawler.py 1
    sleep 300h
done