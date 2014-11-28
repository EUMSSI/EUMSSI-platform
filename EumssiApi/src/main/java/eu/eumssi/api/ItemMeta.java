package eu.eumssi.api;

import java.net.UnknownHostException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import eu.eumssi.api.json.JSONMeta;
import eu.eumssi.api.json.JSONResponse;
import eu.eumssi.managers.EumssiException;
import eu.eumssi.managers.QueryManager;

/**
 * Returns metadata for a given item
 * 
 * @author jens.grivolla
 * 
 */
@Path("/item/meta")
public class ItemMeta {

	/**
	 * Logger for this class and subclasses.
	 */
	protected final Log log = LogFactory.getLog(getClass());

	@Context
	ServletConfig config;

	private QueryManager queryManager;

	public ItemMeta() throws UnknownHostException, EumssiException {
		this.queryManager = QueryManager.getInstance();
	}

	/**
	 * Returns metadata for a given item, unknown or unavailable fields are skipped
	 * 
	 * @param fields (required): comma separated list of fields to retrieve, a field name of "CAS" retrieves the UIMA CAS in JSON format, "*" to retrieve all available metadata (only for debugging)
	 * @param key (required): authentication key
	 * 
	 * @return Returns item list in JSON format
	 * 
	 * <br><br>JSON Response:<br>
	 * <code>
	 * {
	 *      "meta":<meta object>,
	 *      "data":{
	 *               "meta":{<dictionary of metadata fields>}                   
	 *       }
	 * }
	 * </code>
	 * 
	 *  <br><br>List of returned status type errors.
	 *  <br>
	 *	<br><code>StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED</code> (Error 210) if the required parameter key (key) is not defined.
	 *  <br>
	 *	<br><code>StatusType.ERROR_INVALID_KEY</code> (Error 110) if the specified key is not valid.
	 *  <br>
	 *	<br><code>StatusType.ERROR_DB_CONNECT</code> (Error 400) if an unhandled error occurred during acquisition of the database connection.
	 *  <br><code>StatusType.ERROR_DB_QUERY</code> (Error 401) if an unhandled error occurred during the query execution.
	 *  <br><code>StatusType.ERROR_UNKNOWN</code> (Error 999) if an unhandled exception is thrown.
	 *
	 */
	@GET
	@Produces("application/json; charset=utf-8")
	public Response itemMetaServiceGET(
			@QueryParam("itemId") String itemId,
			@QueryParam("fields") @DefaultValue("*") String fields,
			@QueryParam("key") String key) {
		try {

			// check undefined params.
			if (isNull(key) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED).toResponse();
			}
			if (isNull(itemId) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_ITEM_ID_NOT_DEFINED).toResponse();
			}

			// check valid key
			if (queryManager.isKeyValid(key) == false) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_INVALID_KEY).toResponse();
			}

			// get metadata
			Map<String, Object> metaData = queryManager.getItemMeta(itemId, fields.split("[, ]+"));
			// build JSONResponse
			Map<String, Object> responseData = new HashMap<String,Object>();
			responseData.put("meta", metaData);
			responseData.put("timestamp", new Date());
			responseData.put("item_id", itemId);
			JSONMeta meta = new JSONMeta(JSONMeta.StatusType.SUCCESS, "Metadata retrieved successfully");
			JSONResponse response = new JSONResponse(meta, responseData);
			return response.toResponse();

		} catch (EumssiException e) {
			return new JSONResponse(e.getStatusType()).toResponse();
		} catch (Exception e) {
			log.error("Unknown exception", e);
			return new JSONResponse(JSONMeta.StatusType.ERROR_UNKNOWN).toResponse();
		}

	}

	static private boolean isNull(Object... objects) {
		for (Object o : objects) {
			if (o == null || o.equals(new String("")))
				return true;
		}
		return false;
	}


}