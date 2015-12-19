#task: eumssi 		--> energy; 
#task: word-news 	--> more general topics; 
#hint: we should run word-news (this has been discussed topic) to have more information; but keeping eumssi energy topic to have few more data in our collection
task=$1
JARS=RSSCollector.jar
COUNTER=0
while [  $COUNTER -lt 10000 ]; do
    # Spawn a child process:
    java -cp $JARS de.l3s.rss.RSSCollector $task >log.$task 2>&1&
    t=$!
    # in the background, sleep for 10 secs then kill that process
    sleep 5h
    kill $t
done
