package de.l3s.eumssi.model;

import java.sql.Date;
import java.text.SimpleDateFormat;

import javax.xml.bind.annotation.adapters.XmlAdapter;



public class DateXMLAdapter extends XmlAdapter <String, java.sql.Date>{

	private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	
	
	@Override
	public String marshal(Date sqlDate) throws Exception {
		return dateFormat.format(sqlDate);
	}

	@Override
	public Date unmarshal(String stringDate) throws Exception {
		return Date.valueOf(stringDate);
	}

}


//public class DateXMLAdapter extends XmlAdapter <java.util.Date, java.sql.Date>{
//
//	@Override
//	public java.util.Date marshal(Date sqlDate) throws Exception {
//		return new java.util.Date(sqlDate.getTime());
//	}
//
//	@Override
//	public Date unmarshal(java.util.Date utilDate) throws Exception {
//		return new Date(utilDate.getTime());
//	}
//
//}
