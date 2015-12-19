package database;

public class Config {

	private static String HOST = "localhost";
	private static String SCHEMA = "eumssi";
	private static String USERNAME = "root";
	private static String PASSWORD = "";
	private static String PORT = "3306";
	
	public enum defaultdata{LOCALHOST,L3S};

	public static void setData() {
	}

	public static void setPort(String port) {
		PORT = port;

	}

	public static String getPort() {
		return PORT;

	}

	public static String getHost() {
		setData();
		return HOST;
	}

	public static void setHost(String hOST) {

		HOST = hOST;
	}

	public static String getSchema() {
		setData();
		return SCHEMA;
	}

	public static void setSchema(String sCHEMA) {

		SCHEMA = sCHEMA;
	}

	public static String getUsername() {
		setData();
		return USERNAME;
	}

	public static void setUsername(String uSERNAME) {

		USERNAME = uSERNAME;
	}

	public static String getPassword() {
		setData();
		return PASSWORD;
	}

	public static void setPassword(String pASSWORD) {
		PASSWORD = pASSWORD;
	}

	enum db_properties {
		DB_SCHEMA, DB_HOST, DB_PORT, DB_UNAME, DB_PASS
	};

	public static void setDefaultData(defaultdata index) {
		setSchema("eumssi");
		setHost("localhost");
		setPort("3306");

		Config.setUsername("root");
		Config.setPassword("");
	}

	public static void setDefaultData() {
		setDefaultData(defaultdata.LOCALHOST);

	}

}
