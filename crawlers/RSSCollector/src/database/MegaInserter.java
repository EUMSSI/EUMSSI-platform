package database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * MegaInserter is a class for inserting multiple values into a db. It gathers
 * the objects and automatically insert the batch when reaching a particular
 * size. It works much faster for huge amount of data insertion than native
 * addBatch()/executeBatch() solution, On regular base the latter should be
 * used, due to better code readability.
 * 
 * @author Zerr
 * 
 */
public class MegaInserter {

	private StringBuilder sb = new StringBuilder();
	private int MAX_LENGTH = 10000;
	String startsql = "";
	String endsql = "";
	Connection con = null;
	boolean ignore = false;
	boolean foreign_connection = false;
	private boolean trace = false;

	public void setTrace(boolean trace) {
		this.trace = trace;
	}

	/**
	 * Default buffer size is 10000 characters. Whenever statement length
	 * reaches this number, it will commit automatically.
	 * 
	 * @param table
	 *            table name into should be inserted
	 * @param fields
	 *            fields into should be inserted. the order is defined like in
	 *            the VALUES(?,?,?,?,?)
	 * @param ignore
	 *            if true, "INSERT IGNORE" is used.
	 */
	public MegaInserter(String table, String[] fields, boolean ignore) {
		this(table, fields, ignore, 10000);
	}

	/**
	 * 
	 * @param table
	 *            table name into should be inserted
	 * @param fields
	 *            fields into should be inserted. the order is defined like in
	 *            the VALUES(?,?,?,?,?)
	 * @param ignore
	 *            if true, "INSERT IGNORE" is used.
	 * @param buffer_max_size
	 *            Whenever statement length reaches this number, it will commit
	 *            automatically.
	 */
	public MegaInserter(String table, String[] fields, boolean ignore,
			int buffer_max_size) {
		StringBuilder sb = new StringBuilder();
		sb.append("INSERT ");
		if (ignore) {
			sb.append("IGNORE");
		}
		sb.append(" INTO ");
		sb.append(table);
		sb.append(" (");
		for (int i = 0; i < fields.length; i++) {
			if (i > 0)
				sb.append(",");
			sb.append("`" + fields[i] + "`");
		}
		sb.append((" )"));
		sb.append((" VALUES "));
		startsql = sb.toString();
		MAX_LENGTH = buffer_max_size;

	}

	/**
	 * Default buffer size is 10000 characters, ignore will be false
	 * 
	 * @param table
	 *            table name into should be inserted
	 * @param fields
	 *            fields into should be inserted. the order is defined like in
	 *            the VALUES(?,?,?,?,?)
	 */
	public MegaInserter(String table, String[] fields) {
		this(table, fields, false);
	}

	/**
	 * 
	 * @param con
	 *            SQL connection
	 * @param table
	 *            table name into should be inserted
	 * @param fields
	 *            fields into should be inserted. the order is defined like in
	 *            the VALUES(?,?,?,?,?)
	 * @param ignore
	 *            if true, "INSERT IGNORE" is used.
	 * @param buffer_max_size
	 *            Whenever statement length reaches this number, it will commit
	 *            automatically.
	 */
	public MegaInserter(Connection con, String tabname, String[] fields,
			boolean ignore, int max_buffer_size) {
		this(tabname, fields, ignore, max_buffer_size);
		foreign_connection = true;
		this.con = con;
	}

	/**
	 * 
	 * @param data
	 *            to be be inserted. The order is defined like in the
	 *            VALUES(?,?,?,?,?)
	 * @param forceStorage
	 *            if true, the Inserter will commit.
	 */
	public void addData(String[] data, boolean forceStorage) {
		if (sb.length() > 0) {
			sb.append(",");
		}
		sb.append(DB.combineInsertBuffer(data));

		if (sb.length() > MAX_LENGTH) {
			writeoutbuf();
		}

	}

	/**
	 * Inserter will commit the buffer
	 * 
	 * @param close_connection
	 *            if true, the connection used for insertion will be closed.
	 */
	public void flush(boolean close_connection) {
		writeoutbuf();
		if (!foreign_connection && close_connection) {
			if (con != null)
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
		}
	}

	/**
	 * Inserter will commit the buffer. The connection will still be opened.
	 */
	public void flush() {
		flush(false);
	}

	private void writeoutbuf() {
		if (sb.length() == 0)
			return;
		try {
			if (con == null || con.isClosed()) {
				if (foreign_connection) {
					System.out
							.println("ERROR: Received connection was closed. Exit.");
					System.exit(1);
				}
				con = DB.getThreadConnection();
			}
		} catch (SQLException se) {
			se.printStackTrace();
		}

		String sql = startsql + sb.toString() + endsql;
		try {
			Statement st = con.createStatement();

			st.execute(sql);
			sb = new StringBuilder();
			st.close();
		} catch (SQLException e) {
			e.printStackTrace();
			if (!trace)
				DB.log().info(sql.substring(0, 1000));
		}
		if (trace)
			DB.log().info(sql.substring(0,
					Math.min(sql.length() - 1, 1000)));

	}

	/**
	 * The datta will be added to the buffer for later commitment
	 * 
	 * @param data
	 *            to be be inserted. The order is defined like in the
	 *            VALUES(?,?,?,?,?)
	 */
	public void addData(String[] data) {
		addData(data, false);

	}
	
}
