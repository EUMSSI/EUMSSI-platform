#mvn install assembly:assembly to generate jar file, 
#Running sync from mysql to mongodb on weekly basis
mvn install assembly:assembly
JARS=target/RSSCollector-1.0-jar-with-dependencies.jar
COUNTER=0
while [  $COUNTER -lt 1000 ]; do
    # Spawn a child process:
    java -cp $JARS de.l3s.eumssi.news.Import 1W >log.import.1W 2>&1&
    t=$!
    # in the background, sleep for 10 secs then kill that process
    sleep 7d
    kill $t
done
