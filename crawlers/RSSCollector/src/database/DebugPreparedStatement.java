package database;

import java.io.InputStream;
import java.io.Reader;
import java.math.BigDecimal;
import java.net.URL;
import java.sql.Array;
import java.sql.Blob;
import java.sql.Clob;
import java.sql.Date;
import java.sql.NClob;
import java.sql.ParameterMetaData;
import java.sql.PreparedStatement;
import java.sql.Ref;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.RowId;
import java.sql.SQLException;
import java.sql.SQLXML;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Calendar;

public class DebugPreparedStatement extends DebugStatement implements
		PreparedStatement {

	private PreparedStatement pst;

	public DebugPreparedStatement(String id, DebugConnection father,
			PreparedStatement pst) {
		super(id, father, pst);
		this.pst = pst;

	}

	@Override
	public void addBatch(String sql) throws SQLException {
		pst.addBatch(sql);

	}

	@Override
	public void addBatch() throws SQLException {
		pst.addBatch();

	}

	@Override
	public void clearParameters() throws SQLException {
		pst.clearParameters();

	}

	@Override
	public boolean execute() throws SQLException {

		return pst.execute();
	}

	@Override
	public ResultSet executeQuery() throws SQLException {

		return addResultset(new DebugResultSet(nextId(), this, pst.executeQuery()));
	}

	@Override
	public int executeUpdate() throws SQLException {

		return pst.executeUpdate();
	}

	@Override
	public ResultSetMetaData getMetaData() throws SQLException {
		return pst.getMetaData();
	}

	@Override
	public ParameterMetaData getParameterMetaData() throws SQLException {
		return pst.getParameterMetaData();
	}

	@Override
	public void setArray(int arg0, Array arg1) throws SQLException {
		pst.setArray(arg0, arg1);

	}

	@Override
	public void setAsciiStream(int arg0, InputStream arg1) throws SQLException {
		pst.setAsciiStream(arg0, arg1);

	}

	@Override
	public void setAsciiStream(int arg0, InputStream arg1, int arg2)
			throws SQLException {
		pst.setAsciiStream(arg0, arg1, arg2);

	}

	@Override
	public void setAsciiStream(int arg0, InputStream arg1, long arg2)
			throws SQLException {
		pst.setAsciiStream(arg0, arg1, arg2);

	}

	@Override
	public void setBigDecimal(int arg0, BigDecimal arg1) throws SQLException {
		pst.setBigDecimal(arg0, arg1);

	}

	@Override
	public void setBinaryStream(int arg0, InputStream arg1) throws SQLException {
		pst.setBinaryStream(arg0, arg1);

	}

	@Override
	public void setBinaryStream(int arg0, InputStream arg1, int arg2)
			throws SQLException {
		pst.setBinaryStream(arg0, arg1, arg2);

	}

	@Override
	public void setBinaryStream(int arg0, InputStream arg1, long arg2)
			throws SQLException {
		pst.setBinaryStream(arg0, arg1, arg2);

	}

	@Override
	public void setBlob(int arg0, Blob arg1) throws SQLException {
		pst.setBlob(arg0, arg1);

	}

	@Override
	public void setBlob(int arg0, InputStream arg1) throws SQLException {
		pst.setBlob(arg0, arg1);

	}

	@Override
	public void setBlob(int arg0, InputStream arg1, long arg2)
			throws SQLException {
		pst.setBlob(arg0, arg1, arg2);

	}

	@Override
	public void setBoolean(int arg0, boolean arg1) throws SQLException {
		pst.setBoolean(arg0, arg1);

	}

	@Override
	public void setByte(int arg0, byte arg1) throws SQLException {
		pst.setByte(arg0, arg1);

	}

	@Override
	public void setBytes(int arg0, byte[] arg1) throws SQLException {
		pst.setBytes(arg0, arg1);

	}

	@Override
	public void setCharacterStream(int arg0, Reader arg1) throws SQLException {
		pst.setCharacterStream(arg0, arg1);

	}

	@Override
	public void setCharacterStream(int arg0, Reader arg1, int arg2)
			throws SQLException {
		pst.setCharacterStream(arg0, arg1, arg2);

	}

	@Override
	public void setCharacterStream(int arg0, Reader arg1, long arg2)
			throws SQLException {
		pst.setCharacterStream(arg0, arg1, arg2);

	}

	@Override
	public void setClob(int arg0, Clob arg1) throws SQLException {
		pst.setClob(arg0, arg1);

	}

	@Override
	public void setClob(int arg0, Reader arg1) throws SQLException {
		pst.setClob(arg0, arg1);

	}

	@Override
	public void setClob(int arg0, Reader arg1, long arg2) throws SQLException {
		pst.setClob(arg0, arg1, arg2);

	}

	@Override
	public void setDate(int arg0, Date arg1) throws SQLException {
		pst.setDate(arg0, arg1);

	}

	@Override
	public void setDate(int arg0, Date arg1, Calendar arg2) throws SQLException {
		pst.setDate(arg0, arg1, arg2);

	}

	@Override
	public void setDouble(int arg0, double arg1) throws SQLException {
		pst.setDouble(arg0, arg1);

	}

	@Override
	public void setFloat(int arg0, float arg1) throws SQLException {
		pst.setFloat(arg0, arg1);

	}

	@Override
	public void setInt(int arg0, int arg1) throws SQLException {
		pst.setInt(arg0, arg1);

	}

	@Override
	public void setLong(int arg0, long arg1) throws SQLException {
		pst.setLong(arg0, arg1);

	}

	@Override
	public void setNCharacterStream(int arg0, Reader arg1) throws SQLException {
		pst.setNCharacterStream(arg0, arg1);

	}

	@Override
	public void setNCharacterStream(int arg0, Reader arg1, long arg2)
			throws SQLException {
		pst.setNCharacterStream(arg0, arg1, arg2);

	}

	@Override
	public void setNClob(int arg0, NClob arg1) throws SQLException {
		pst.setNClob(arg0, arg1);

	}

	@Override
	public void setNClob(int arg0, Reader arg1) throws SQLException {
		pst.setNClob(arg0, arg1);

	}

	@Override
	public void setNClob(int arg0, Reader arg1, long arg2) throws SQLException {
		pst.setNClob(arg0, arg1, arg2);

	}

	@Override
	public void setNString(int arg0, String arg1) throws SQLException {
		pst.setNString(arg0, arg1);

	}

	@Override
	public void setNull(int arg0, int arg1) throws SQLException {
		pst.setNull(arg0, arg1);

	}

	@Override
	public void setNull(int arg0, int arg1, String arg2) throws SQLException {
		pst.setNull(arg0, arg1, arg2);

	}

	@Override
	public void setObject(int arg0, Object arg1) throws SQLException {
		pst.setObject(arg0, arg1);

	}

	@Override
	public void setObject(int arg0, Object arg1, int arg2) throws SQLException {
		pst.setObject(arg0, arg1, arg2);

	}

	@Override
	public void setObject(int arg0, Object arg1, int arg2, int arg3)
			throws SQLException {
		pst.setObject(arg0, arg1, arg2, arg3);

	}

	@Override
	public void setRef(int arg0, Ref arg1) throws SQLException {
		pst.setRef(arg0, arg1);

	}

	@Override
	public void setRowId(int arg0, RowId arg1) throws SQLException {
		pst.setRowId(arg0, arg1);

	}

	@Override
	public void setSQLXML(int arg0, SQLXML arg1) throws SQLException {
		pst.setSQLXML(arg0, arg1);

	}

	@Override
	public void setShort(int arg0, short arg1) throws SQLException {
		pst.setShort(arg0, arg1);

	}

	@Override
	public void setString(int arg0, String arg1) throws SQLException {
		pst.setString(arg0, arg1);

	}

	@Override
	public void setTime(int arg0, Time arg1) throws SQLException {
		pst.setTime(arg0, arg1);

	}

	@Override
	public void setTime(int arg0, Time arg1, Calendar arg2) throws SQLException {
		pst.setTime(arg0, arg1);

	}

	@Override
	public void setTimestamp(int arg0, Timestamp arg1) throws SQLException {
		pst.setTimestamp(arg0, arg1);

	}

	@Override
	public void setTimestamp(int arg0, Timestamp arg1, Calendar arg2)
			throws SQLException {
		pst.setTimestamp(arg0, arg1);

	}

	@Override
	public void setURL(int arg0, URL arg1) throws SQLException {
		pst.setURL(arg0, arg1);

	}

	@SuppressWarnings("deprecation")
	@Override
	public void setUnicodeStream(int arg0, InputStream arg1, int arg2)
			throws SQLException {
		pst.setUnicodeStream(arg0, arg1, arg2);

	}

}
