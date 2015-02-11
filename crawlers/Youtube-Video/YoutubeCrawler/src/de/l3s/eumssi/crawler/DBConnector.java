/*
 * Database connector  
 */
package de.l3s.eumssi.crawler;
import java.sql.*;
import java.util.Properties;

public class DBConnector {
    private static final String dbClassName = "com.mysql.jdbc.Driver";
    //change the connection to your local mysql
    private static final String CONNECTION = "INTERNAL_CONNECTOR";
    
    public synchronized static Connection getConnection()
    {
        Connection con = null;
        try{
            Class.forName(dbClassName);
        }catch(ClassNotFoundException e) {
                System.out.println("Could not load driver class "+e);
        }
    
        Properties p = new Properties();
        p.put("user","USER_NAME");
        p.put("password","PASSWORD");

        try{
            con = DriverManager.getConnection(CONNECTION,p);
        }catch (SQLException e) {
                System.out.println("Could not get connection "+e);
        }
        System.out.println("It works !Yes Database is connected....");
        return con;
    }
    
    public synchronized static void closeDBConnection(Connection con){
        if(con != null) {
            try{
                con.close();
                con = null;
            }
            catch (SQLException e) {
                System.out.println("Could not close Connection "+e);
            }
        }
    }
    
    public static synchronized boolean isClosed(Connection con) {
        boolean isClosed = false;
        try {
            if(con == null || con.isClosed()) {
                isClosed = true;
            }
        }catch(Exception e) {
            e.printStackTrace();
        }
        return isClosed;
    }
    
    public synchronized static void closeStatement(Statement stmt) {
        if(stmt != null) {
            try{
                stmt.close();
                stmt = null;
            }
            catch (SQLException e) {
                System.out.println("Could not close Statement "+e);
            }
        }
    }
    
    public synchronized static void closePStatement(PreparedStatement pstmt) {
        if(pstmt != null) {
            try{
                pstmt.close();
                pstmt = null;
            }
            catch (SQLException e) {
                System.out.println("Could not close Prepared Statement "+e);
            }
        }
    }
    
    public synchronized static void closeResultSet(ResultSet res) {
        if(res != null) {
            try{
                res.close();
                res = null;
            }
            catch (SQLException e) {
                System.out.println("Could not close ResultSet "+e);
            }
        }
    }
}
