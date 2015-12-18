package database;

import java.sql.Array;
import java.sql.Blob;
import java.sql.CallableStatement;
import java.sql.Clob;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.NClob;
import java.sql.PreparedStatement;
import java.sql.SQLClientInfoException;
import java.sql.SQLException;
import java.sql.SQLWarning;
import java.sql.SQLXML;
import java.sql.Savepoint;
import java.sql.Statement;
import java.sql.Struct;
import java.util.Date;
import java.util.Hashtable;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.Executor;

import database.DebugDB.Status;

public class DebugConnection implements Connection {

	String id;
	Status statusinfo;
	String debuginfo;

	Hashtable<String, DebugStatement> statements = new Hashtable<String, DebugStatement>();

	private Connection con;

	public DebugConnection(String id, Connection con) {
		this.id = id;
		this.con = con;

		debuginfo = DebugConnection.createInfo("OPENED:",
				new Exception().getStackTrace()).toString();
		statusinfo = Status.OPENED;
	}

	public static StringBuilder createInfo(String status,
			StackTraceElement[] trace) {

		StringBuilder info = new StringBuilder();
		info.append(status);
		for (StackTraceElement el : trace) {
			if (info.length() > 0)
				info.append("->");
			info.append(el.getFileName()).append("[").append(new Date())
					.append(",").append(el.getClassName()).append(".")
					.append(el.getMethodName()).append("(")
					.append(el.getLineNumber()).append(")]");
		}
		return info;
	}

	@Override
	public boolean isWrapperFor(Class<?> iface) throws SQLException {
		return con.isWrapperFor(iface);

	}

	@Override
	public <T> T unwrap(Class<T> iface) throws SQLException {
		return con.unwrap(iface);

	}

	@Override
	public void clearWarnings() throws SQLException {
		con.clearWarnings();

	}

	@Override
	public void close() throws SQLException {

		con.close();

		DebugDB.removeConnection(this);

		statusinfo = Status.CLOSED;

		StringBuilder info = createInfo("CLOSED:",
				new Exception().getStackTrace());
		debuginfo += "|" + info;

	}

	@Override
	public void commit() throws SQLException {
		con.commit();

	}

	@Override
	public Array createArrayOf(String arg0, Object[] arg1) throws SQLException {
		return con.createArrayOf(arg0, arg1);

	}

	@Override
	public Blob createBlob() throws SQLException {
		return con.createBlob();
	}

	@Override
	public Clob createClob() throws SQLException {
		return con.createClob();
	}

	@Override
	public NClob createNClob() throws SQLException {
		return con.createNClob();
	}

	@Override
	public SQLXML createSQLXML() throws SQLException {
		return con.createSQLXML();
	}

	@Override
	public Statement createStatement() throws SQLException {
		return addStatement(new DebugStatement(this.getId() + "_"
				+ statements.size(), this, con.createStatement()));
	}

	private Statement addStatement(DebugStatement debugStatement) {
		statements.put(this.getId() + "_" + statements.size(), debugStatement);
		return debugStatement;
	}

	@Override
	public Statement createStatement(int resultSetType, int resultSetConcurrency)
			throws SQLException {
		return addStatement(new DebugStatement(this.getId() + "_"
				+ statements.size(), this, con.createStatement(resultSetType,
				resultSetConcurrency)));
	}

	@Override
	public Statement createStatement(int resultSetType,
			int resultSetConcurrency, int resultSetHoldability)
			throws SQLException {
		return addStatement(new DebugStatement(this.getId() + "_"
				+ statements.size(), this, con.createStatement(resultSetType,
				resultSetConcurrency, resultSetHoldability)));
	}

	@Override
	public Struct createStruct(String typeName, Object[] attributes)
			throws SQLException {
		return con.createStruct(typeName, attributes);
	}

	@Override
	public boolean getAutoCommit() throws SQLException {
		return con.getAutoCommit();

	}

	@Override
	public String getCatalog() throws SQLException {
		return con.getCatalog();

	}

	@Override
	public Properties getClientInfo() throws SQLException {
		return con.getClientInfo();
	}

	@Override
	public String getClientInfo(String name) throws SQLException {
		return con.getClientInfo(name);
	}

	@Override
	public int getHoldability() throws SQLException {
		return con.getHoldability();
	}

	@Override
	public DatabaseMetaData getMetaData() throws SQLException {
		return con.getMetaData();
	}

	@Override
	public int getTransactionIsolation() throws SQLException {
		return con.getTransactionIsolation();

	}

	@Override
	public Map<String, Class<?>> getTypeMap() throws SQLException {
		return con.getTypeMap();
	}

	@Override
	public SQLWarning getWarnings() throws SQLException {
		return con.getWarnings();
	}

	@Override
	public boolean isClosed() throws SQLException {
		return con.isClosed();
	}

	@Override
	public boolean isReadOnly() throws SQLException {
		return con.isReadOnly();
	}

	@Override
	public boolean isValid(int timeout) throws SQLException {
		return con.isValid(timeout);
	}

	@Override
	public String nativeSQL(String sql) throws SQLException {
		return con.nativeSQL(sql);
	}

	@Override
	public CallableStatement prepareCall(String sql) throws SQLException {
		return con.prepareCall(sql);

	}

	@Override
	public CallableStatement prepareCall(String sql, int resultSetType,
			int resultSetConcurrency) throws SQLException {
		return con.prepareCall(sql, resultSetType, resultSetConcurrency);

	}

	@Override
	public CallableStatement prepareCall(String sql, int resultSetType,
			int resultSetConcurrency, int resultSetHoldability)
			throws SQLException {
		return con.prepareCall(sql, resultSetType, resultSetConcurrency,
				resultSetHoldability);

	}

	@Override
	public PreparedStatement prepareStatement(String sql) throws SQLException {
		return addPreparedStatement(new DebugPreparedStatement(this.getId()
				+ "_" + statements.size(), this, con.prepareStatement(sql)));

	}

	private PreparedStatement addPreparedStatement(
			DebugPreparedStatement debugStatement) {
		statements.put(debugStatement.getId(), debugStatement);
		return debugStatement;
	}

	@Override
	public PreparedStatement prepareStatement(String sql, int autoGeneratedKeys)
			throws SQLException {
		return addPreparedStatement(new DebugPreparedStatement(this.getId()
				+ "_" + statements.size(), this, con.prepareStatement(sql,
				autoGeneratedKeys)));
	}

	@Override
	public PreparedStatement prepareStatement(String sql, int[] columnIndexes)
			throws SQLException {
		return addPreparedStatement(new DebugPreparedStatement(this.getId()
				+ "_" + statements.size(), this, con.prepareStatement(sql,
				columnIndexes)));

	}

	@Override
	public PreparedStatement prepareStatement(String sql, String[] columnNames)
			throws SQLException {
		return addPreparedStatement(new DebugPreparedStatement(this.getId()
				+ "_" + statements.size(), this, con.prepareStatement(sql,
				columnNames)));

	}

	@Override
	public PreparedStatement prepareStatement(String sql, int resultSetType,
			int resultSetConcurrency) throws SQLException {
		return addPreparedStatement(new DebugPreparedStatement(this.getId()
				+ "_" + statements.size(), this, con.prepareStatement(sql,
				resultSetType, resultSetConcurrency)));
	}

	@Override
	public PreparedStatement prepareStatement(String sql, int resultSetType,
			int resultSetConcurrency, int resultSetHoldability)
			throws SQLException {
		return addPreparedStatement(new DebugPreparedStatement(this.getId()
				+ "_" + statements.size(), this, con.prepareStatement(sql,
				resultSetType, resultSetConcurrency, resultSetHoldability)));

	}

	@Override
	public void releaseSavepoint(Savepoint savepoint) throws SQLException {
		con.releaseSavepoint(savepoint);

	}

	@Override
	public void rollback() throws SQLException {
		con.rollback();

	}

	@Override
	public void rollback(Savepoint savepoint) throws SQLException {
		con.rollback(savepoint);

	}

	@Override
	public void setAutoCommit(boolean autoCommit) throws SQLException {
		con.setAutoCommit(autoCommit);

	}

	@Override
	public void setCatalog(String catalog) throws SQLException {
		con.setCatalog(catalog);

	}

	@Override
	public void setClientInfo(Properties properties)
			throws SQLClientInfoException {
		con.setClientInfo(properties);

	}

	@Override
	public void setClientInfo(String name, String value)
			throws SQLClientInfoException {
		con.setClientInfo(name, value);

	}

	@Override
	public void setHoldability(int holdability) throws SQLException {
		con.setHoldability(holdability);

	}

	@Override
	public void setReadOnly(boolean readOnly) throws SQLException {
		con.setReadOnly(readOnly);

	}

	@Override
	public Savepoint setSavepoint() throws SQLException {
		return con.setSavepoint();

	}

	@Override
	public Savepoint setSavepoint(String name) throws SQLException {
		return con.setSavepoint(name);
	}

	@Override
	public void setTransactionIsolation(int level) throws SQLException {
		con.setTransactionIsolation(level);

	}

	@Override
	public void setTypeMap(Map<String, Class<?>> map) throws SQLException {
		con.setTypeMap(map);

	}

	Hashtable<String, DebugStatement> getStatements() {

		return statements;
	}

	public void removeStatement(DebugStatement debugStatement) {
		statements.remove(debugStatement.id);
	}

	public String getId() {
		// TODO Auto-generated method stub
		return id;
	}

	@Override
	public void setSchema(String schema) throws SQLException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getSchema() throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void abort(Executor executor) throws SQLException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setNetworkTimeout(Executor executor, int milliseconds)
			throws SQLException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int getNetworkTimeout() throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}
}
