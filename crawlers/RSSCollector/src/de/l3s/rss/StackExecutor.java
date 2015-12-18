package de.l3s.rss;

import java.util.Date;
import java.util.Random;
import java.util.concurrent.ExecutorService;

import org.apache.log4j.Logger;

import de.l3s.util.datatypes.IndexedQueue;
import de.l3s.util.date.TimeUtils;

public class StackExecutor extends Thread {

	private IndexedQueue<RSSFeed> stack;
	private ExecutorService executor;

	public StackExecutor(IndexedQueue<RSSFeed> stack, ExecutorService executor) {
		this.stack = stack;
		this.executor = executor;
	}

	public synchronized Long readFromstack(Logger logger) {
		Random r = new Random();

		RSSFeed feed = stack.showFirst();
		if (feed == null)
			return null;
		Date now = new Date();
		long millis = feed.getNextcrawlschedule().getTime() - now.getTime();

		logger.info("Nextfeedcrawl is "
				+ new Date(feed.getNextcrawlschedule().getTime()));

		if (millis < 0) {
			millis = 0;
			// logger.info(feed.feedurl+" And we start it! ");
			executor.execute(new FeedCrawler(stack.firstElement()));

		} else {
			// /logger.info(feed.feedurl+" And we postpone it! ");
		}

		return millis;
	}

	@Override
	public void run() {
		Logger logger = Logger.getLogger(this.getClass());
		while (true) {
			Long millis = 10000L;
			if (!stack.empty()) {

				// logger.info("Look at the stack ");

				millis = readFromstack(logger);
				if (millis == null) {
					try {
						Thread.sleep(10000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					continue;
				}

			}

			try {
				if (millis > 0) {
					logger.info("take executo will sleep for "
							+ TimeUtils.millisToLongDHMS(millis) + "");
					logger.info("Stake executor wakes up on "
							+ new Date(new Date().getTime() + millis));

					Thread.sleep(millis);
				}
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
