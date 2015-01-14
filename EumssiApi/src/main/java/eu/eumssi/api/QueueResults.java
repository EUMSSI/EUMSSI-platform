package eu.eumssi.api;

import java.net.UnknownHostException;

import javax.servlet.ServletConfig;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import eu.eumssi.api.json.JSONMeta;
import eu.eumssi.api.json.JSONResponse;
import eu.eumssi.managers.EumssiException;
import eu.eumssi.managers.QueryManager;

/**
 * Returns list of pending content items to process
 * 
 * @author jens.grivolla
 * 
 */
@Path("/queue/results")
public class QueueResults {
	
	/**
	 * Logger for this class and subclasses.
	 */
	protected final Log log = LogFactory.getLog(getClass());

	@Context
	ServletConfig config;

	private QueryManager queryManager;

	public QueueResults() throws UnknownHostException, EumssiException {
		this.queryManager = QueryManager.getInstance();
	}

	/**
	 * Upload processing results to server
	 * Invalid items are skipped without error message, check the item count
	 * 
	 * @param queueId (required): queue ID
	 * @param data (required): processing result
	 * @param key (required): authentication key
	 * 
	 * @return Returns status message with number of correctly inserted items, 
	 * received items are automatically marked as "processed"
	 * 
	 * <br><br>JSON Format for "data":<br>
	 * <code>
	 * {
     *      <id_1>:<analysis results in process-specific JSON format>,
     *      <id_2>: ...
     * }
	 * </code>
	 * 
	 *  <br><br>List of returned status type errors.
	 *  <br>
	 *  <br><code>StatusType.ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED</code> (Error 202) if the required parameter queue ID (queue_id) is not defined.
	 *  <br><code>StatusType.ERROR_PARAMETER_DATA_NOT_DEFINED</code> (Error 204) if the required parameter queue ID (queue_id) is not defined.
	 *	<br><code>StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED</code> (Error 210) if the required parameter key (key) is not defined.
	 *  <br>
	 *  <br><code>StatusType.ERROR_INVALID_QUEUE_ID</code> (Error 102) if the specified queue id does not correspond to a valid queue.
	 *	<br><code>StatusType.ERROR_INVALID_KEY</code> (Error 110) if the specified key is not valid.
	 *  <br>
	 *	<br><code>StatusType.ERROR_DB_CONNECT</code> (Error 400) if an unhandled error occurred during acquisition of the database connection.
	 *  <br><code>StatusType.ERROR_DB_QUERY</code> (Error 401) if an unhandled error occurred during the query execution.
	 *  <br><code>StatusType.ERROR_UNKNOWN</code> (Error 999) if an unhandled exception is thrown.
	 *
	 */
	@POST
	@Produces("application/json; charset=utf-8")
	public Response queueResultsPOST(
			@FormParam("queueId") String queueId,
			@FormParam("data") String data,
			@FormParam("key") String key) {
		try {
			
			// check undefined params.
			if (isNull(queueId) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED).toResponse();
			}
			else if (isNull(data) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_DATA_NOT_DEFINED).toResponse();
			}
			else if (isNull(key) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED).toResponse();
			}
			
			// check valid key
			if (queryManager.isKeyValid(key) == false) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_INVALID_KEY).toResponse();
			}
			
			// get item list
			Integer itemNum = queryManager.putResults(queueId, data);
			
			// build JSONResponse
			JSONMeta meta = new JSONMeta(JSONMeta.StatusType.SUCCESS, String.format("%d items uploaded successfully",itemNum));
			JSONResponse response = new JSONResponse(meta);
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