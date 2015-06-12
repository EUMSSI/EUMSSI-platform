package de.l3s.util.date;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateInterval {
FlexDate startdate,enddate;

public DateInterval(Date startdate, Date enddate) {
	super();
	this.startdate = new FlexDate(startdate);
	this.enddate = new FlexDate(enddate);
}
public DateInterval(String startmysqlformatteddate, String endmysqlformatteddate) {
	super();

	this.startdate =parseDate(startmysqlformatteddate);
	this.enddate = parseDate(endmysqlformatteddate);
}

private FlexDate parseDate(String mysqlformatteddate) {
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
public FlexDate getStartdate() {
	return startdate;
}

public FlexDate getEnddate() {
	return enddate;
}
public String getSQLRange(String field) {return " "+field+" BETWEEN '"+startdate.toMySQLDate()+"' AND '"+enddate.toMySQLDate()+"'";

	//return " "+field+" > '"+startdate.toMySQLDate()+"' AND "+field+" < '"+enddate.toMySQLDate()+"'";
	
}
@Override
	public String toString() {
		// TODO Auto-generated method stub
		return startdate+" - "+enddate;
	}
}
