//package de.l3s.eumssi.news;
//
//import java.io.BufferedWriter;
//import java.io.File;
//import java.io.FileNotFoundException;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.io.OutputStreamWriter;
//import java.io.UnsupportedEncodingException;
//import java.sql.*;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.HashMap;
//
//
//public class EXPERT_ORACLE_DBMANAGER {
//	
//	Connection connection;
//	
//	public EXPERT_ORACLE_DBMANAGER () {
//		try {
//			Class.forName("oracle.jdbc.driver.OracleDriver");
//		} catch (ClassNotFoundException e) {
//			System.out.println("Where is your Oracle JDBC Driver?");
//			e.printStackTrace();
//			return;
//		}
//		
//		try {
//			connection =  DriverManager.getConnection(
//					"jdbc:oracle:thin:@godzilla.kbs.uni-hannover.de:1521:orcl", "experts",
//					"huhu");
// 
//		} catch (SQLException e) {
//			System.out.println("Connection Failed! Check output console");
//			e.printStackTrace();
//			return;
// 
//		}
// 
//		if (connection != null) {
//			System.out.println("Connected!");
//		} else {
//			System.out.println("Failed to make connection!");
//		}
//	}
//	/**
//	 * select user_author, count(1)
//from reddit_m2_users_comments
//where user_score<0
//group by user_author
//having count(1) >25
//
//	 * @param troll
//	 */
//	public void getUsers(boolean troll) {
//		try {
//			Statement stmt = connection.createStatement();
//			String query =  " select user_author, count(1) as c " +
//							" from reddit_m2_users_comments" + 
//							" where user_score<0 " +
//							" group by user_author"  +
//							" having count(1) >25";
//			
//			ResultSet rs = stmt.executeQuery(query);
//			int i = 0;
//			while (rs.next()) {
//				System.out.println("trolling user number " + i++);
//				System.out.println(rs.getString("user_author"));
//				System.out.println(rs.getString("c"));
//			}
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
//	}
//	
//	
//	/**
//	 * get user from table
//	 * 
//REDDIT_NEG_USERS
//REDDIT_POS_USERS
//REDDIT_RANDOM_USER
//
//	ecah table has 2 colusn : USER_AUTHOR va COUNT1 ,
//	 * 
//	 */
//	public HashMap<String, Integer> getUsers(String table_name) {
//		HashMap<String, Integer> user_count = new HashMap<String, Integer> ();
//		try {
//			Statement stmt = connection.createStatement();
//			String query =  " select user_author, count1 as c " +
//							" from " + table_name  ;
//			
//			ResultSet rs = stmt.executeQuery(query);
//			int i = 0;
//			while (rs.next()) {
//				System.out.println(table_name + "\t  User number " + i++);
//				String name = rs.getString("user_author");
//				int count =  rs.getInt("c");
//				user_count.put(name, count);
//			}
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
//		System.out.println("DONE GET USERS");
//		return user_count;
//	}
//	
//	
//	public ArrayList<Reddit_user_comment> getComments(String username) {
//		SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		ArrayList<Reddit_user_comment> comments = new ArrayList<Reddit_user_comment> ();
//		try {
//			String query =  " select * from reddit_m2_users_comments where user_author = ? order by CREATED_AT DESC";
//			PreparedStatement p = connection.prepareStatement(query);
//			p.setString(1, username);
//			ResultSet rs = p.executeQuery();
//			int i = 0;
//			while (rs.next()) {
//				Reddit_user_comment cm = new Reddit_user_comment();
//				cm.author_name = username;
//				cm.created_at = DATE_FORMAT.parse(rs.getString("created_at"));
//				cm.user_body = rs.getString("user_body");
//				cm.user_up_score = rs.getInt("user_ups");
//				comments.add(cm);
//			}
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//		return comments;
//		
//	}
//	
//	public static void extract_user_features(String outputDir, String tbl_name, String label) throws IOException {
//		EXPERT_ORACLE_DBMANAGER edb = new EXPERT_ORACLE_DBMANAGER();
//		
//		
//		BufferedWriter file = new BufferedWriter(new OutputStreamWriter(
//				new FileOutputStream(outputDir + 
//						tbl_name + ".txt" ), "utf-8"));
//		
//		HashMap<String, Integer> users = edb.getUsers(tbl_name);
//		int count = 0;
//		for (String username: users.keySet()) {
//			System.out.println("processing.."  + count++ + "\t" + username);
//			ArrayList<Reddit_user_comment> comments  = edb.getComments(username);
//			HashMap<String, Double> metaFeatures = FeatureExtractor.extractMetaFeatures(comments);
//			
//			
//			ArrayList<String> features = new ArrayList<String> ();
//			features.addAll(metaFeatures.keySet());
//			
//			file.write(String.format(label + "\t%s\t%d", username, users.get(username)));
//			Collections.sort(features);
//			for (String f: features) {
//				file.write(String.format("\t%s:%.3f",f, metaFeatures.get(f)));
//			}
//			file.write('\n');
//		}
//		
//		file.close();
//		
//	}
//	
//	
//	
//	/**
//	 * query at once to get all users and their comments
//	 * faster
//	 * 
//	 * 	select *
//		from reddit_m2_users_comments t1, REDDIT_POS_USERS t2
//		where t1.user_author = t2.user_author
//		
//		
//	 * @param table
//	 * @throws IOException 
//	 */
//	public void getData(String tbl_name) throws IOException {
//		String outputDir = "cikm_reddit/";
//		BufferedWriter file = new BufferedWriter(new OutputStreamWriter(
//				new FileOutputStream(outputDir + 
//						tbl_name + ".data.txt" ), "utf-8"));
//		SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		try {
//			String query =  " select *  "+ 
//							" from reddit_m2_users_comments t1, " + tbl_name + " t2 "+
//							" where t1.user_author = t2.user_author";
//			PreparedStatement p = connection.prepareStatement(query);
//			ResultSet rs = p.executeQuery();
//			int i = 0;
//			while (rs.next()) {
//				Reddit_user_comment cm = new Reddit_user_comment();
//				cm.author_name = rs.getString("user_author");
//				cm.created_at_str = rs.getString("created_at");
//				cm.user_body = rs.getString("user_body");
//				if (cm.user_body!=null) cm.user_body = cm.user_body.replaceAll("\n", "");
//				else continue;
//				cm.user_up_score = rs.getInt("user_ups");
//				cm.count = rs.getInt("count1");
//				file.write(String.format("%s\t#GTAB#\t%s\t#GTAB#\t%s\t#GTAB#\t%s\t#GTAB#\t%s\n", cm.author_name, cm.created_at_str,
//						cm.user_body, cm.user_up_score, cm.count));
//				//file.close();
//				//System.exit(0);
//			}
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
//		file.close();
//	}
//	
//	
//	public static void main(String[] args) {
//		String outputDir = "cikm_reddit/";
//		
//		File dr = new File(outputDir);
//		if (!dr.exists()) dr.mkdirs();
//		EXPERT_ORACLE_DBMANAGER edb = new EXPERT_ORACLE_DBMANAGER();
//		try {
//			edb.getData("REDDIT_NEG_USERS");
//			edb.getData("REDDIT_POS_USERS");
//			edb.getData("REDDIT_RANDOM_USERS");
//			//extract_user_features(outputDir, table_name, label);
//			//extract_user_features(outputDir, "REDDIT_POS_USERS", "1");
//			//extract_user_features(outputDir, "REDDIT_RANDOM_USERS", "2");
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
//	public void pushMetaFeatureData(String user, String table_name,
//			HashMap<String, Double> metafeatures) {
//		try {
//			String query =  " update " + table_name + 
//					" SET " +
//					" avg_up_score=?," +
//					" min_up_score=?," +
//					" max_up_score=?," +
//					" avg_comment_time_distance=?, " +
//					" min_edit_distance=?, " +
//					" max_edit_distance=?," + 
//					" start_end_time_distance=?," +
//					" activity=?, " +
//					" intensity=? " +
//					" WHERE user_author= ?";
//			PreparedStatement p = connection.prepareStatement(query);
//			p.setDouble(1, metafeatures.get("avg_up_score"));
//			p.setDouble(2, metafeatures.get("min_up_score"));
//			p.setDouble(3, metafeatures.get("max_up_score"));
//			p.setDouble(4, metafeatures.get("avg_comment_time_distance"));
//			p.setDouble(5, metafeatures.get("min_edit_distance"));
//			p.setDouble(6, metafeatures.get("max_edit_distance"));
//			p.setDouble(7, metafeatures.get("start_end_time_distance"));
//			p.setDouble(8, metafeatures.get("activity"));
//			p.setDouble(9, metafeatures.get("intensity"));
//			p.setString(10, user);
//			int r = p.executeUpdate();
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} 
//	}
//	
//	
//	/**
//	 *  select t2.depth, t3.user_author
//		from  reddit_m2_month_comments t1, REDDIT_MONTH_DEPTHS t2, reddit_pos_users t3
//		where t1.comment_id = t2.id_comment
//		and t1.comment_author = t3.user_author 
//	 * @return
//	 * @throws IOException 
//	 * table : reddit_pos_users /neg/random
//	 */
//	public void getDeepthComment(String table) throws IOException {
//		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(
//				new FileOutputStream("/workspaces/cikm2015/features/user_comment_depth.txt" + table) , "utf-8"));
//		
//		
//		try {
//			Statement stmt = connection.createStatement();
//			String query =  " select t2.depth, t3.user_author " +
//							" from  reddit_m2_month_comments t1, REDDIT_MONTH_DEPTHS t2, " + table + " t3 " + 
//							" where t1.comment_id = t2.id_comment " +
//							" and t1.comment_author = t3.user_author ";
//			ResultSet rs = stmt.executeQuery(query);
//			int i = 0;
//			while (rs.next()) {
//				System.out.println(i++ + " process...");
//				String user_name = rs.getString("USER_AUTHOR");
//				int depth = rs.getInt("DEPTH");
//				bw.write(String.format("%s\t%d\n", user_name, depth));
//			}
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
//		
//		
//		bw.close();
//	}
//	
//	public void pushPoliteFeatureData(String author, String table_name,
//			HashMap<String, Double> politefeatures) {
//		try {
//			String query =  " update " + table_name + 
//					" SET " +
//					" HASPOSITIVE=?," +
//					" HASNEGATIVE=?," +
//					" INDICATIVE=?," +
//					" SUBJUNCTIVE=?, " +
//					" Polar=?, " +
//					" second_person=?," + 
//					" first_person=?," +
//					" Direct_start=?, " +
//					" Direct_question=?, " +
//					" Factuality=?, " +
//					" Indirect_greeting=?, " +
//					" first_person_start=?, " +
//					" second_person_start=?, " +
//					" first_person_pl=?, " +
//					" Apologizing=?, " +
//					" Gratitude=?, " +
//					" Deference=?, " +
//					" Please=?, " +
//					" Please_start=?, " +
//					" HASHEDGE=?" +
//					" WHERE user_author= ?";
//			PreparedStatement p = connection.prepareStatement(query);
//			p.setDouble(1, politefeatures.get("HASPOSITIVE"));
//			p.setDouble(2, politefeatures.get("HASNEGATIVE"));
//			p.setDouble(3, politefeatures.get("INDICATIVE"));
//			p.setDouble(4, politefeatures.get("SUBJUNCTIVE"));
//			p.setDouble(5, politefeatures.get("Polar"));
//			p.setDouble(6, politefeatures.get("2nd_person"));
//			p.setDouble(7, politefeatures.get("1st_person"));
//			p.setDouble(8, politefeatures.get("Direct_start"));
//			p.setDouble(9, politefeatures.get("Direct_question"));
//			p.setDouble(10, politefeatures.get("Factuality"));
//			p.setDouble(11, politefeatures.get("Indirect_greeting"));
//			p.setDouble(12, politefeatures.get("1st_person_start"));
//			p.setDouble(13, politefeatures.get("2nd_person_start"));
//			p.setDouble(14, politefeatures.get("1st_person_pl"));
//			p.setDouble(15, politefeatures.get("Apologizing"));
//			p.setDouble(16, politefeatures.get("Gratitude"));
//			p.setDouble(17, politefeatures.get("Deference"));
//			p.setDouble(18, politefeatures.get("Please"));
//			p.setDouble(19, politefeatures.get("Please_start"));
//			p.setDouble(20, politefeatures.get("HASHEDGE"));
//			p.setString(21, author);
//			int r = p.executeUpdate();
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} 
//	}
//	
//	
//}
