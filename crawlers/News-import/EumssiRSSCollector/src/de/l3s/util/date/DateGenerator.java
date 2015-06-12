package de.l3s.util.date;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Vector;

public class DateGenerator {

	

	public Vector<DateInterval> generatedatesMonthly(FlexDate startdate,
			FlexDate enddate) {
		return generateTimeIntervals(startdate, enddate, Calendar.MONTH, 1);
	}

	

	

	public static void main(String[] args) {
		DateGenerator dg = new DateGenerator();
		Vector<DateInterval> res = dg.generateTimeIntervals(FlexDate.parseGregorianDate("2005-01-01"), FlexDate.parseGregorianDate("2006-01-01"), Calendar.HOUR, 1);
		System.out.println(res.size());
		

		for (DateInterval i : res) {

			System.out.println(i.getStartdate() + "   -   " + i.getEnddate());
		}
	}

	public Vector<DateInterval> generatedateseach20min(FlexDate startdate,
			FlexDate enddate) {
		return generateTimeIntervals(startdate, enddate, Calendar.MINUTE, 20);
	}

	public Vector<DateInterval> generateTimeIntervals(FlexDate start,
			FlexDate end, int Timeportion, int cntportions) {
		Vector<DateInterval> dates = new Vector<DateInterval>();
		GregorianCalendar cal = new GregorianCalendar();
		cal.setTime(start);

		Date startdate;
		Date enddate;
		boolean inrange = false;
		do {
			startdate = cal.getTime();
			cal.add(Timeportion, cntportions);
			enddate = cal.getTime();
			inrange = enddate.before(end);
			if (!inrange) {
				break;
			}
			dates.add(new DateInterval(startdate, enddate));

		} while (inrange);

		return dates;
	}

	
}
