//package de.l3s.rss;
//
//import java.io.File;
//import java.io.FileWriter;
//import java.io.IOException;
//import java.io.UnsupportedEncodingException;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//
//import database.DB;
//import de.l3s.util.file.FileUtils;
//
//public class FeedTester {
//	public static void main(String[] args) {
//		// findkameradenmanuell();
//		// findkameraden();
//		chechkameraden();
//		// findkameraden();
//	}
//
//	static void chechkameraden() {
//		if (true)
//			return;
//		String newstr = "";
//		Connection con;
//		try {
//			con = DB.getThreadConnection();
//			String badstring = FileUtils.read(new File("badsmalltring.txt"));
//
//			newstr = new String(badstring.getBytes("UTF-8"), "UTF-8");
//
//			// System.out.println(newstr);
//
//			String s = new String(newstr.toCharArray());
//			PreparedStatement xpst = con
//					.prepareStatement("INSERT INTO eumssi.test SET tst=?");
//			xpst.setString(1, s);
//			try {
//				xpst.executeUpdate();
//
//			} catch (Exception e) {
//				System.out.println("Bad String " + newstr);
//
//			}
//			xpst.close();
//
//			newstr += "üöä";
//
//			newstr = newstr.replaceAll("[^\\u0000-\\uFFFF]", "\uFFFD");
//			for (Character c : newstr.toCharArray()) {
//
//				System.out.println(c
//						+ " "
//						+ Character.charCount(c)
//						+ " "
//						+ c.charValue()
//						+ Character.isSurrogatePair(c.charValue(),
//								c.charValue()));
//			}
//			newstr = cleanXML(newstr);
//			try {
//				byte[] myBytes = new String(newstr.toCharArray())
//						.getBytes("UTF-8");
//				System.out.println("afterconvert " + new String(myBytes));
//			} catch (UnsupportedEncodingException e) {
//				e.printStackTrace();
//				System.exit(-1);
//			}
//
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		/*
//		 * FileWriter fw=new FileWriter(new File("badstring.txt"));
//		 * fw.write(badstring); fw.flush(); fw.close();
//		 */catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//	}
//
//	private static String cleanXML(String newstr) {
//		byte[] utf8Bytes = new byte[0];
//		try {
//			utf8Bytes = newstr.getBytes("UTF-8");
//
//			byte outbytes[] = new byte[utf8Bytes.length];
//			int idx = 0;
//			boolean wasbroken = false;
//			for (int i = 0; i < utf8Bytes.length; i++) {
//				byte b = utf8Bytes[i];
//
//				switch (b) {
//				case 0x1b:
//				case 0x0:
//				case 0x11: {
//					try {
//						String tst = new String(utf8Bytes, Math.max(0, i - 20),
//								Math.min(utf8Bytes.length - i, 20), "UTF-8");
//						System.out
//								.println("The evil part is between the brackets: {"
//										+ tst + "}");
//
//					} catch (UnsupportedEncodingException e1) {
//
//						e1.printStackTrace();
//					}
//					wasbroken = true;
//
//				}
//					break;
//				default: {
//					// System.out.println(utf8Bytes[i]+"="+(int)(utf8Bytes[i]));
//					outbytes[idx] = utf8Bytes[i];
//					idx++;
//				}
//
//				}
//			}
//
//			String dis = new String(outbytes, "UTF-8");
//
//			return dis;
//
//		} catch (UnsupportedEncodingException e1) {
//			e1.printStackTrace();
//			System.out.println("ouch bytes!" + newstr);
//
//		}
//		return null;
//
//	}
//
//	static void findkameradenmanuell() {
//		if (true)
//			return;
//		Connection con;
//		try {
//			con = DB.getThreadConnection();
//			String badstring = FileUtils.read(new File("badstring.txt"));
//
//			String newstr = new String(badstring.getBytes("UTF-8"), "UTF-8");
//			badstring.toCharArray();
//			// int start=0,end=newstr.length()/2;
//			String toins = newstr;
//			int start = 0, end = 26975;
//
//			System.out.println("check between " + start + " and " + end);
//			// System.out.println(newstr);
//			toins = newstr.substring(start, end);
//
//			PreparedStatement xpst = con
//					.prepareStatement("INSERT INTO eumssi.test SET tst=?");
//			xpst.setString(1, toins);
//			try {
//				xpst.executeUpdate();
//				start = start + (end - start) / 2;
//			} catch (Exception e) {
//				e.printStackTrace();
//				end = end / 2;
//			}
//			xpst.close();
//
//			FileWriter fw = new FileWriter(new File("badsmalltring.txt"));
//			fw.write(toins);
//			fw.flush();
//			fw.close();
//
//			// System.out.println(toins);
//
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		/*
//		 * FileWriter fw=new FileWriter(new File("badstring.txt"));
//		 * fw.write(badstring); fw.flush(); fw.close();
//		 */catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//	}
//
//	static void findkameraden() {
//		if (true)
//			return;
//		Connection con;
//		try {
//			con = DB.getThreadConnection();
//			String badstring = FileUtils.read(new File("badstring.txt"));
//
//			String newstr = new String(badstring.getBytes("UTF-8"), "UTF-8");
//			badstring.toCharArray();
//			int start = 23867, end = 23920;
//			String toins = newstr;
//			// int start=10115,end=13487;
//			while (Math.abs(end - start) > 50) {
//				System.out.println("check between " + start + " and " + end);
//				// System.out.println(newstr);
//				toins = newstr.substring(start, end);
//
//				PreparedStatement xpst = con
//						.prepareStatement("INSERT INTO eumssi.test SET tst=?");
//				xpst.setString(1, toins);
//				try {
//					xpst.executeUpdate();
//					start = start + (end - start) / 2;
//				} catch (Exception e) {
//					System.out.print(e.getMessage() + "\n");
//					end = end - (end - start) / 2;
//				}
//				xpst.close();
//			}
//
//			FileWriter fw = new FileWriter(new File("badsmalltring.txt"));
//			fw.write(toins);
//			fw.flush();
//			fw.close();
//
//			System.out.println(toins);
//
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		/*
//		 * FileWriter fw=new FileWriter(new File("badstring.txt"));
//		 * fw.write(badstring); fw.flush(); fw.close();
//		 */catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//	}
//}
