#task= eumssi --> energy or wordnews
task=$1
JARS=RSSCollector.jar
COUNTER=0
while [  $COUNTER -lt 1000 ]; do
    let COUNTER=COUNTER+1
    # Spawn a child process:
    java -cp $JARS de.l3s.rss.RSSCollector $task >log.$task 2>&1&
    t=$!
    # in the background, sleep for 10 secs then kill that process
    sleep 5h
    kill $t
done
