package eu.eumssi.api.json;


import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * This class represents a response message.
 * 
 */
public class JSONResponse {

	/**
	 * JSON converter
	 */
	private static Gson gson = new GsonBuilder().disableHtmlEscaping().setPrettyPrinting().create();


	private Object data = null;

	private JSONMeta meta = null;	

	public JSONResponse(JSONMeta meta, Object data){				
		this.data = data;
		this.meta = meta;
	}
	public JSONResponse(JSONMeta meta){
		this.meta = meta;
	}
	public JSONResponse(JSONMeta.StatusType statusType){
		this.meta = new JSONMeta(statusType);
	}

	public Object getData() {
		return data;
	}

	public JSONMeta getMeta() {
		return meta;
	}


	/**
	 * Converts the object to a JSON representation
	 * @return A String in JSON format of itself
	 */
	public String toJson()
	{		
		return JSONResponse.gson.toJson(this, this.getClass());			
	}

	public static JSONResponse fromJson(String json)
	{
		JSONResponse object = gson.fromJson(json, JSONResponse.class);
		return object;
	}


	public Response toResponse() {
		if (this.meta.getStatus().equals("ok")) {
			return Response.ok(this.toJson(),MediaType.APPLICATION_JSON).build();
		} else {
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(this.toJson()).build();
		}
	}
	
}
