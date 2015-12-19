#task: eumssi to crawl engery focused data (by default)
#task: wordnews to crawl more general data
#hint: as discussed, we should focus on more general topic, but in fact it does not harm to have few more data  on energy
task=$1
mvn install assembly:assembly
JARS=target/RSSCollector-1.0-jar-with-dependencies.jar
COUNTER=0
while [  $COUNTER -lt 10000 ]; do
    let COUNTER=COUNTER+1
    # Spawn a child process:
    java -cp $JARS de.l3s.rss.RSSCollector $task >log.$task 2>&1&
    t=$!
    # in the background, sleep for 10 secs then kill that process
    sleep 5h
    kill $t
done
