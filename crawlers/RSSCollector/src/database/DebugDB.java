package database;

import java.sql.SQLException;
import java.util.Hashtable;

public class DebugDB {

	enum Status {
		OPENED, CLOSED
	};

	static Hashtable<String, DebugConnection> connections = new Hashtable<String, DebugConnection>();

	public static synchronized DebugConnection createCionnection()
			throws SQLException {

		String id = connections.size() + "";
		DebugConnection con = new DebugConnection(id, DB.getThreadConnection());
		connections.put(id, con);
		return con;

	}

	public static void removeConnection(DebugConnection debugConnection) {
		connections.remove(debugConnection.getId());

	}

	public static void printNotClosed() {
		StringBuffer sb = new StringBuffer();
		for (DebugConnection con : connections.values()) {

			sb.append("ID(" + con.getId() + ":").append(con.debuginfo)
					.append("\n");
			printNonClosed(con.getStatements(), sb);
		}

		System.out.println(sb);
	}

	private static void printNonClosed(
			Hashtable<String, DebugStatement> statements, StringBuffer sb) {
		for (DebugStatement st : statements.values()) {
			sb.append(
					"\t" + st.getClass().getName() + " ID(" + st.getId() + ":")
					.append(st.getInfo()).append("\n");
			for (DebugResultSet rs : st.getResultSets().values()) {
				sb.append("\t\tResultSet ID(" + rs.getId() + ":")
						.append(rs.getInfo()).append("\n");
			}

		}

	}
}
