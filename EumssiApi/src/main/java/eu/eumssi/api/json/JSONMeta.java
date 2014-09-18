package eu.eumssi.api.json;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * This class represents a Meta message.
 * It contains information about every REST API method calling, such as
 * code number, status and message.
 * 
 * @author jens.grivolla
 */
public class JSONMeta {
	
	/**
	 * JSON converter
	 */
	private static Gson gson = new GsonBuilder().serializeNulls().disableHtmlEscaping().create();
	
	/**
	 * Enumeration of status types 
	 */
	public enum StatusType 
	{
		SUCCESS,
		ERROR,
		ERROR_INVALID_KEY, 
		ERROR_INVALID_PARAMS,
		ERROR_INVALID_QUEUE_ID,
		ERROR_PARAMETER_NOT_DEFINED,
		ERROR_CONFLICT_PARAMS,
		ERROR_PARAMETER_KEY_NOT_DEFINED,
		ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED,
		ERROR_PARAMETER_ITEM_ID_NOT_DEFINED,
		ERROR_DB_CONNECT,
		ERROR_DB_QUERY,
		ERROR_UNKNOWN,
		ERROR_PARAMETER_DATA_NOT_DEFINED,
		ERROR_INVALID_ITEM_ID
	}
	
	private static final Map<StatusType, String> statusMessages;
	
	private static final Map<StatusType, Integer> statusCodes;
	
	static 
	{
		statusMessages = new HashMap<StatusType, String>();
		statusMessages.put(StatusType.SUCCESS, "Success");
		statusMessages.put(StatusType.ERROR, "Error");
		statusMessages.put(StatusType.ERROR_INVALID_KEY, "Invalid key");
		statusMessages.put(StatusType.ERROR_INVALID_PARAMS, "Invalid parameters");
		statusMessages.put(StatusType.ERROR_INVALID_QUEUE_ID, "Invalid queue ID");
		statusMessages.put(StatusType.ERROR_INVALID_ITEM_ID, "Invalid queue ID");
		statusMessages.put(StatusType.ERROR_PARAMETER_NOT_DEFINED, "Parameter not defined");
		statusMessages.put(StatusType.ERROR_CONFLICT_PARAMS, "Conflict between parameters");
		statusMessages.put(StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED, "Parameter key (key) not defined");
		statusMessages.put(StatusType.ERROR_PARAMETER_DATA_NOT_DEFINED, "Parameter data (data) not defined");
		statusMessages.put(StatusType.ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED, "Parameter queue ID (queueId) not defined");
		statusMessages.put(StatusType.ERROR_PARAMETER_ITEM_ID_NOT_DEFINED, "Parameter item ID (itemId) not defined");
		statusMessages.put(StatusType.ERROR_DB_CONNECT, "Database connect error");
		statusMessages.put(StatusType.ERROR_DB_QUERY, "Database query error");
		statusMessages.put(StatusType.ERROR_UNKNOWN, "Unknown error");
		
		statusCodes = new HashMap<StatusType, Integer>();
		statusCodes.put(StatusType.SUCCESS, 0);
		statusCodes.put(StatusType.ERROR, 1);
		statusCodes.put(StatusType.ERROR_INVALID_KEY, 110);
		statusCodes.put(StatusType.ERROR_INVALID_PARAMS, 100);
		statusCodes.put(StatusType.ERROR_INVALID_QUEUE_ID, 102);
		statusCodes.put(StatusType.ERROR_INVALID_ITEM_ID, 103);
		statusCodes.put(StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED, 210);
		statusCodes.put(StatusType.ERROR_PARAMETER_NOT_DEFINED, 200);
		statusCodes.put(StatusType.ERROR_CONFLICT_PARAMS, 201);
		statusCodes.put(StatusType.ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED, 202);
		statusCodes.put(StatusType.ERROR_PARAMETER_ITEM_ID_NOT_DEFINED, 203);
		statusCodes.put(StatusType.ERROR_PARAMETER_DATA_NOT_DEFINED, 204);
		statusCodes.put(StatusType.ERROR_DB_CONNECT, 400);
		statusCodes.put(StatusType.ERROR_DB_QUERY, 401);
		statusCodes.put(StatusType.ERROR_UNKNOWN, 999);
		
	}
	
	
	@SuppressWarnings("unused")
	private String message = "";
	@SuppressWarnings("unused")
	private String code = "";
	private String status = "";
	
	/**
	 * Default constructor
	 * @param statusType Type of status (Ok, Error, ...)
	 */
	public JSONMeta(StatusType statusType)
	{
		this.message = statusMessages.get(statusType);
		this.code = Integer.toString(statusCodes.get(statusType));
		this.status = "error";
		if (statusType == StatusType.SUCCESS)
			this.status = "ok";		
	}
	
	/**
	 * 
	 * @param statusType Type of status (Ok, Error, ...)
	 */
	public JSONMeta(StatusType statusType, String message)
	{
		this.message = message;
		this.code = Integer.toString(statusCodes.get(statusType));
		this.status = "error";
		if (statusType == StatusType.SUCCESS)
			this.status = "ok";		
	}
	
			
	public String getStatus() {
		return status;
	}

	/**
	 * Converts the object to a JSON representation
	 * @return A String in JSON format of itself
	 */
	public String toJson()
	{
		return JSONMeta.gson.toJson(this, this.getClass());			
	}
	
	
	public static void printErrors() {
		for (StatusType key : StatusType.values())	{
			int code = statusCodes.get(key);
			String message = statusMessages.get(key);
			System.out.println("Error " + code + ": " + message);
		}
	}
	
}