package de.l3s.eumssi.Youtube;

public class CleanCommentAge {
	
	public String cleaner(String dirtyAge){
		
		String age = null;
		age = dirtyAge.substring(4).replace("Stunden", "hours").
				replace("Minuten", "minutes").replace("Tagen", "days")
				.replace("Tag", "day").replace("Wochen","weeks")
				.replace("Woche","week").replace("Stunde","hour")
				.replace("Monate","months").replace("Monat","month")
				.replace("Jahr","year").replace("Jahre","years")
				.replace("Sekunde","second").replace("Sekunden","seconds")
				.replace("Monthsn", "months").replace("vor ","")
				.replace("Secondn","seconds").replace("Yearen","years").replace("monthsn", "months")
				.replace("yearen","years");
		return age;
	}

}
