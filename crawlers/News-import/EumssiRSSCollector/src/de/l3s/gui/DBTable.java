package de.l3s.gui;

import javax.swing.table.AbstractTableModel;

public class DBTable extends AbstractTableModel {

	private int cols;
	private int rows;
	Object[][] rowData;

	public DBTable(int cols, int rows) {
		this.cols = cols;
		this.rows = rows;
		rowData = new Object[rows][cols];
	}

	public int getColumnCount() {
		return cols;
	}

	public int getRowCount() {
		return rows;
	}

	public Object getValueAt(int row, int col) {
		return rowData[row][col];
	}

	public boolean isCellEditable(int row, int col) {
		return true;
	}

	public void setValueAt(Object value, int row, int col) {
		rowData[row][col] = value;
		fireTableCellUpdated(row, col);
	}

};
