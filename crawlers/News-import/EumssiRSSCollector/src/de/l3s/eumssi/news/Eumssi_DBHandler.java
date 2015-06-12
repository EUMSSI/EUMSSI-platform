package de.l3s.eumssi.news;
import java.sql.*;
import java.util.Properties;

/**
 *This class is intended to establish the connection with database.
 */
public class Eumssi_DBHandler {
    //class variables
    private static final String dbClassName = "com.mysql.jdbc.Driver";
    
    //change the connection to your local mysql
    private static final String CONNECTION = "jdbc:mysql://localhost:3306/eumssi";
    public synchronized static Connection getConnection()
    {
        Connection con = null;
        try{
            Class.forName(dbClassName);
        }catch(ClassNotFoundException e) {
                System.out.println("Could not load driver class "+e);
        }
    
        // Properties for user and password. Here the user and password
        Properties p = new Properties();
        
        p.put("user", "root");
        p.put("password", "");
        //p.put("user","gtran");
        //p.put("password","JNfvGqGyvxS2EnUp");
        
//        p.put("user","experts");
//        p.put("password","RFaVwZtuCyZPyd97");
        
        // Now try to connect
        try{
            con = DriverManager.getConnection(CONNECTION,p);
        }catch (SQLException e) {
                System.out.println("Could not get connection "+e);
        }
        System.out.println("It works !Yes Database is connected....");
        return con;
    }
    
   /*
     * This method is used to close the connection to the database
     * @param   con the existing Conenction object to establish connection with databse
     */
    public synchronized static void closeDBConnection(Connection con)
    {
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
    
    
    /**
     * This method is used to check whether the connection to database is closed or not
     * @param con   Connection object
     * @return      A boolean value whether the connection to database is closed or not
     */
    
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
    
    /*
     * This method is used to close the Statement
     * @param   stmt    A statement object
     */
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
    
   /*
     * This method is used to close the prepared Statement
     * @param   pstmt   A PreparedStatement object
     */
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
    
     /*
     * This method is used to close the resultSet
     * @param   res A ResultSet object
     */
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
