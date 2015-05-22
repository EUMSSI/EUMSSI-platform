package de.l3s.eumssi.action;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class TestDate {

	/**
	 * @param args
	 */
	public static void main(String[] args) {


		Calendar d = new GregorianCalendar();		
	    String date = new SimpleDateFormat("yyyy-MM-dd").format(d.getTime());
	    System.out.println(date);
	    d.add(Calendar.DATE, -1);
	    date = new SimpleDateFormat("yyyy-MM-dd").format(d.getTime());
	    System.out.println(date);

	}

}
