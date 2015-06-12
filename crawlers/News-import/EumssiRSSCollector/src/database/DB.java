package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Properties;

import org.apache.log4j.Logger;

import database.Config.defaultdata;

public class DB {
	private static boolean driverload = false;

	public static Connection getThreadConnection() throws SQLException {

		return getThreadConnection(Config.getSchema());

	}
	
	public static synchronized Connection refreshConnection(Connection con)
	{
		return refreshConnection(con,"");
	}
	public static synchronized Connection refreshConnection(Connection con, String lable)
	{
		int tries = 0;

		do {
			try {
				if (con != null && !con.isClosed()) {
					return con;
				}
				con = DB.getStaticConnection();
				log().info("Connection restored " + lable);
				return con;

			} catch (Exception e) {
				e.printStackTrace();
				log().info("Our connection was too old " + lable);
				con=null;
			}
			if (tries++ > 2) {
				log().info(
						"Connection heavily damaged, will wait 30 seconds and try again"
								+ lable);
				try {
					Thread.sleep(30000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		} while (true);

	}

	public static String addslashes(final String in) {
		String srin = in;
		if (in == null)
			srin = "";
		return srin.replace("\\", "\\\\").replace("'", "''");
	}

	public static Connection getThreadConnection(final String dbname)
			throws SQLException {
	
			// Config.setDefaultData();
			Config.setSchema(dbname);
			if (!driverload) {
				try {
					Class.forName("com.mysql.jdbc.Driver");
				} catch (ClassNotFoundException e1) {
					log().info("com.mysql.jdbc.Driver not in classpath NO MYSQL CONNECTOR JAR?");
					e1.printStackTrace();
					System.exit(1);

				}

			}
			Connection con = null;
			try {
				 con = trytoConnect();
				 log().info("connected to db: " + con.getMetaData().getURL());
				return con;

			} catch (SQLException e) {

				try {
					Config.setDefaultData(defaultdata.L3S);
					 con = trytoConnect();
					 log().info("connected to db: " + con.getMetaData().getURL());
						return con;

				} catch (SQLException e1) {


					Config.setDefaultData(defaultdata.LOCALHOST);

					 con = trytoConnect();
					 log().info("connected to db: " + con.getMetaData().getURL());
						return con;

				}
			}
	}

	private static Connection trytoConnect() throws SQLException {
		final String url = "jdbc:mysql://" + Config.getHost() + ":"
				+ Config.getPort() + "/" + Config.getSchema();

		return DriverManager.getConnection(url, Config.getUsername(),
				Config.getPassword());

	}

	public static Connection getLocalConnection(final String dbname)
			throws SQLException, ClassNotFoundException,
			InstantiationException, IllegalAccessException {

		final String driver = "org.apache.derby.jdbc.EmbeddedDriver";
		Class.forName(driver).newInstance();

		final String protocol = "jdbc:derby:";
		final Properties props = new Properties();
		props.put("user", "user1");
		props.put("password", "user1");
		final Connection conn = DriverManager.getConnection(protocol
				+ "C:/piDB/" + dbname + ";create=true", props);
		return conn;

	}

	public static Connection getThreadConnection(final String host,
			final String user, final String password, final String dbname)
			throws SQLException, ClassNotFoundException {
		return getThreadConnection(host, null, user, password, dbname);
	}

	public static Connection getThreadConnection(final String host,
			final String port, final String user, final String password,
			final String dbname) throws SQLException, ClassNotFoundException {
		if (!driverload) {
			try {
				Class.forName("com.mysql.jdbc.Driver");
			} catch (ClassNotFoundException e1) {
				System.err.println("com.mysql.jdbc.Driver not in classpath");
				e1.printStackTrace();

			}
		}
		final String url = "jdbc:mysql://" + host + ":"
				+ (port == null ? "3306" : port) + "/" + dbname;
		Connection con = null;
		log().info(url + " user:" + user + " pass:" + password);
		con = DriverManager.getConnection(url, user, password);
		return con;
	}

	public static void main(final String[] args) {
		try {
			final Connection conn = DB.getLocalConnection("testdb");
			log().info("Connected to and created database derbyDB");

			conn.setAutoCommit(false);

			/*
			 * Creating a statement lets us issue commands against the
			 * connection.
			 */
			final Statement s = conn.createStatement();

			/*
			 * We create a table, add a few rows, and update one.
			 */
			s.execute("create table derbyDB(num int, addr varchar(40))");
			log().info("Created table derbyDB");
			s.execute("insert into derbyDB values (1956,'Webster St.')");
			log().info("Inserted 1956 Webster");
			s.execute("insert into derbyDB values (1910,'Union St.')");
			log().info("Inserted 1910 Union");
			s.execute("update derbyDB set num=180, addr='Grand Ave.' where num=1956");
			log().info("Updated 1956 Webster to 180 Grand");

			s.execute("update derbyDB set num=300, addr='Lakeshore Ave.' where num=180");
			log().info("Updated 180 Grand to 300 Lakeshore");

			/*
			 * We select the rows and verify the results.
			 */
			final ResultSet rs = s
					.executeQuery("SELECT num, addr FROM derbyDB ORDER BY num");

			if (!rs.next()) {
				throw new Exception("Wrong number of rows");
			}

			if (rs.getInt(1) != 300) {
				throw new Exception("Wrong row returned");
			}

			if (!rs.next()) {
				throw new Exception("Wrong number of rows");
			}

			if (rs.getInt(1) != 1910) {
				throw new Exception("Wrong row returned");
			}

			if (rs.next()) {
				throw new Exception("Wrong number of rows");
			}

			log().info("Verified the rows");

			s.execute("drop table derbyDB");
			log().info("Dropped table derbyDB");

			/*
			 * We release the result and statement resources.
			 */
			rs.close();
			s.close();
			log().info("Closed result set and statement");

			/*
			 * We end the transaction and the connection.
			 */
			conn.commit();
			conn.close();
			log().info("Committed transaction and closed connection");

			/*
			 * In embedded mode, an application should shut down Derby. If the
			 * application fails to shut down Derby explicitly, the Derby does
			 * not perform a checkpoint when the JVM shuts down, which means
			 * that the next connection will be slower. Explicitly shutting down
			 * Derby with the URL is preferred. This style of shutdown will
			 * always throw an "exception".
			 */
			boolean gotSQLExc = false;

			if (true) {
				try {
					DriverManager.getConnection("jdbc:derby:;shutdown=true");
				} catch (final SQLException se) {
					gotSQLExc = true;
				}

				if (!gotSQLExc) {
					log().info("Database did not shut down normally");
				} else {
					log().info("Database shut down normally");
				}
			}

		} catch (final SQLException e) {

			e.printStackTrace();
		} catch (final ClassNotFoundException e) {

			e.printStackTrace();
		} catch (final InstantiationException e) {

			e.printStackTrace();
		} catch (final IllegalAccessException e) {

			e.printStackTrace();
		} catch (final Exception e) {

			e.printStackTrace();
		}
	}

	public static Hashtable<String, Object> splitToHashtable(final String ids) {
		final Hashtable<String, Object> ret = new Hashtable<String, Object>();
		final String[] ids_array = ids.split(",");
		for (String element : ids_array) {

			ret.put(element, "");

		}
		return ret;
	}

	public static String hashtableToValueString(
			final Hashtable<Object, Object> table, final boolean apostroph) {
		final StringBuffer ret = new StringBuffer();
		final Iterator<Object> it = table.keySet().iterator();

		if (it.hasNext()) {
			ret.append(apostroph ? "'" + it.next() + "'" : it.next());
		}
		while (it.hasNext()) {
			ret.append("," + (apostroph ? "'" + it.next() + "'" : it.next()));
		}
		return ret.toString();
	}

	public static boolean intersect(final Hashtable<Object, Object> set,
			final Hashtable<Object, Object> subset) {
		final Iterator<Object> it_subset = subset.keySet().iterator();
		while (it_subset.hasNext()) {
			final Object ob = it_subset.next();
			if (!set.containsKey(ob)) {
				return false;
			}
		}
		return true;
	}

	public static boolean isText() {
		return true;
	}

	public static String combineInsertBuffer(String[] strings) {
		StringBuilder sb = new StringBuilder();

		for (String in : strings) {
			if (sb.length() > 0) {
				sb.append(",");
			}

			if (in == null) {
				in = "NULL";
				sb.append(in);
			} else {
				sb.append("'" + addslashes(in) + "'");
			}
		}
		return "(" + sb.toString() + ")";
	}

	public static String toJavaDate(Date date) {
		java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat(
				"yyyy-MM-dd HH:mm:ss");
		return sdf.format(date);

	}

	static Connection stcon = null;

	public static Connection getStaticConnection() throws SQLException {
		if (stcon == null||stcon.isClosed())
		{
			stcon = getThreadConnection();
		}
		return stcon;
	}
	public static Logger log() {
		return Logger.getLogger(DB.class);
	}

	public static DebugConnection getDebugConnection() throws SQLException {
		return DebugDB.createCionnection();
		
	}

	public static Connection getThreadConnection(String host, int port,
			 String username, String password, String schema) throws SQLException {
		Config.setSchema(schema);
		Config.setHost(host);
		Config.setPort(port+"");
		Config.setUsername(username);
		Config.setPassword(password);
		return getThreadConnection();
	}
}
