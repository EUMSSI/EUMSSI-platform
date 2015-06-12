package de.l3s.util.date;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Hashtable;
import java.util.Random;

public class FlexDate extends Date{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3733542920823354913L;

	public FlexDate(Date startdate) {
		super(startdate.getTime());
	}

	public FlexDate() {
	this(new Date());
	}

	public int getGregorian(int calendarfield) {

		Calendar myCal = new GregorianCalendar();
		myCal.setTime(this);
		return myCal.get(calendarfield);
		
		
		
	}
	public String toMySQLDate()
	{
		
		return toMySQLDate("yyyy-MM-dd HH:mm:ss");
		
			
	}
	public String toMySQLDate(String format)
	{
		Calendar myCal = new GregorianCalendar();
		myCal.setTime(this);
		SimpleDateFormat df = new SimpleDateFormat(format);
		return df.format(this);
		
			
	}
	/**
	 * lucene is in format yyyymmdd
	 * @param luceneDate
	 * @return
	 */
	public static FlexDate parseLuceneDate(String luceneDate) 
	{
		return parseGregorianDate(luceneDate.substring(0,4)+"-"+luceneDate.substring(4,6)+"-"+luceneDate.substring(6,8));
	}
	
	public static FlexDate parseGregorianDate(String mysqlformatteddate) {
		DateFormat df = null;
		try{
		df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return new FlexDate(df.parse(mysqlformatteddate));
		}catch(ParseException ex)
		{
			try{
				df=new SimpleDateFormat("yyyy-MM-dd HH:mm");
				return new FlexDate(df.parse(mysqlformatteddate));
				}catch(ParseException ex1)
				{
					try{
						df=new SimpleDateFormat("yyyy-MM-dd HH");
						return new FlexDate(df.parse(mysqlformatteddate));
						}catch(ParseException ex2)
						{
							try{
								df=new SimpleDateFormat("yyyy-MM-dd");
								return new FlexDate(df.parse(mysqlformatteddate));
								}catch(ParseException ex3)
								{
									try{
										df=new SimpleDateFormat("yyyy-MM");
										return new FlexDate(df.parse(mysqlformatteddate));
										}catch(ParseException ex4)
										{
											try{
												df=new SimpleDateFormat("yyyy");
												return new FlexDate(df.parse(mysqlformatteddate));
												}catch(ParseException ex5)
												{
													
												}
										}
								}
						}
				}
		}
		return null;
	}

	public static FlexDate parseUnixtime(Integer favedate) {
		Date d = new Date((favedate.longValue())*1000);
		return new FlexDate(d);
	}

	public long getUnixtimestamp() {
		// TODO Auto-generated method stub
		return getTime()/1000;
	}

	public static FlexDate randomDate(FlexDate startdate,
			FlexDate enddate) {
		Random r=new Random();

		long duration = enddate.getTime()-startdate.getTime();
		long rand = r.nextLong()%duration;
		
		return new FlexDate(new Date(rand+startdate.getTime()));
	}
	static Hashtable<String, Integer> months=null;
	
public static  int parseMonth(String monthName)
{
	if(months==null)
	{
		months=new Hashtable<String, Integer>();
		months.put("jan", Calendar.JANUARY);
		months.put("january", Calendar.JANUARY);
		months.put("feb", Calendar.FEBRUARY);
		months.put("february", Calendar.FEBRUARY);
		months.put("mar", Calendar.MARCH);
		months.put("march", Calendar.MARCH);
		months.put("apr", Calendar.APRIL);
		months.put("april", Calendar.APRIL);
		months.put("may", Calendar.MAY);
		months.put("jun", Calendar.JUNE);
		months.put("june", Calendar.JUNE);
		months.put("jul", Calendar.JULY);
		months.put("july", Calendar.JULY);
		months.put("aug", Calendar.AUGUST);
		months.put("august", Calendar.AUGUST);
		months.put("sep", Calendar.SEPTEMBER);
		months.put("september", Calendar.SEPTEMBER);
		months.put("oct", Calendar.OCTOBER);
		months.put("october", Calendar.SEPTEMBER);
		months.put("nov", Calendar.NOVEMBER);
		months.put("november", Calendar.NOVEMBER);
		months.put("dec", Calendar.DECEMBER);
		months.put("december", Calendar.DECEMBER);
		
	}
	return months.get(monthName.toLowerCase());
}
	public  String formatDate(String pattern)
	{
		SimpleDateFormat sdf = new SimpleDateFormat();
	    sdf.applyPattern( pattern );
	    return sdf.format(this) ;
	}

	public static String fillzeros(String string) {
		if(string.length()==2) return string;
		return "0"+string;
	}
}
