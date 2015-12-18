package de.l3s.util.date;

import java.util.Date;
import java.util.Hashtable;

public class TimeUtils {

	public final static long ONE_SECOND = 1000;
	public final static long SECONDS = 60;

	public final static long ONE_MINUTE = ONE_SECOND * 60;
	public final static long MINUTES = 60;

	public final static long ONE_HOUR = ONE_MINUTE * 60;
	public final static long HOURS = 24;

	public final static long ONE_DAY = ONE_HOUR * 24;

	public enum estimatekey{TIMELEFT,FINISHESTIMATE};
	private TimeUtils() {
	}

	/**
	 * converts time (in milliseconds) to human-readable format
	 * "<w> days, <x> hours, <y> minutes and (z) seconds"
	 */
	public static String millisToLongDHMS(long duration_milliseconds) {
		StringBuffer res = new StringBuffer();
		long temp = 0;
		if (duration_milliseconds >= ONE_SECOND) {
			temp = duration_milliseconds / ONE_DAY;
			if (temp > 0) {
				duration_milliseconds -= temp * ONE_DAY;
				res.append(temp)
						.append(" day")
						.append(temp > 1 ? "s" : "")
						.append(duration_milliseconds >= ONE_MINUTE ? ", " : "");
			}

			temp = duration_milliseconds / ONE_HOUR;
			if (temp > 0) {
				duration_milliseconds -= temp * ONE_HOUR;
				res.append(temp)
						.append(" hour")
						.append(temp > 1 ? "s" : "")
						.append(duration_milliseconds >= ONE_MINUTE ? ", " : "");
			}

			temp = duration_milliseconds / ONE_MINUTE;
			if (temp > 0) {
				duration_milliseconds -= temp * ONE_MINUTE;
				res.append(temp).append(" minute").append(temp > 1 ? "s" : "");
			}

			if (!res.toString().equals("")
					&& duration_milliseconds >= ONE_SECOND) {
				res.append(" and ");
			}

			temp = duration_milliseconds / ONE_SECOND;
			if (temp > 0) {
				res.append(temp).append(" second").append(temp > 1 ? "s" : "");
			}
			return res.toString();
		} else {
			return "0 second";
		}

	}

	public static void main(String args[]) {
		System.out.println(millisToLongDHMS(123));
		System.out.println(millisToLongDHMS((5 * ONE_SECOND) + 123));
		System.out.println(millisToLongDHMS(ONE_DAY + ONE_HOUR));
		System.out.println(millisToLongDHMS(ONE_DAY + 2 * ONE_SECOND));
		System.out.println(millisToLongDHMS(ONE_DAY + ONE_HOUR
				+ (2 * ONE_MINUTE)));
		System.out.println(millisToLongDHMS((4 * ONE_DAY) + (3 * ONE_HOUR)
				+ (2 * ONE_MINUTE) + ONE_SECOND));
		System.out.println(millisToLongDHMS((5 * ONE_DAY) + (4 * ONE_HOUR)
				+ ONE_MINUTE + (23 * ONE_SECOND) + 123));
		System.out.println(millisToLongDHMS(42 * ONE_DAY));
		/*
		 * output : 0 second 5 seconds 1 day, 1 hour 1 day and 2 seconds 1 day,
		 * 1 hour, 2 minutes 4 days, 3 hours, 2 minutes and 1 second 5 days, 4
		 * hours, 1 minute and 23 seconds 42 days
		 */
	}

	public static Hashtable<estimatekey, String> estimateFinishTime(Date start, double percentDone) {
		long curtime = new Date().getTime();
		long secs = curtime - start.getTime();
		de.l3s.util.date.TimeUtils.millisToLongDHMS(secs);
		double overalldurationestimate = 100. * secs / percentDone;
		long timeleft = (long) overalldurationestimate - secs;
		Hashtable<estimatekey, String> ret=new Hashtable<estimatekey, String>();
		
		ret.put(estimatekey.TIMELEFT, millisToLongDHMS(timeleft));
		ret.put(estimatekey.FINISHESTIMATE, new Date(curtime + timeleft).toString());
		return ret;
	}

	public static String millisToLongDHMS(Date start) {
		// TODO Auto-generated method stub
		return millisToLongDHMS(new Date().getTime() - start.getTime());
	}
}