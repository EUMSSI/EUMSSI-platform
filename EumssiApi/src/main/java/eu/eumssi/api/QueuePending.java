package eu.eumssi.api;

import java.net.UnknownHostException;
import java.util.List;

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
 * Returns list of pending content items to process
 * 
 * @author jens.grivolla
 * 
 */
@Path("/queue/pending")
public class QueuePending {
	
	/**
	 * Logger for this class and subclasses.
	 */
	protected final Log log = LogFactory.getLog(getClass());

	@Context
	ServletConfig config;

	private QueryManager queryManager;

	public QueuePending() throws UnknownHostException, EumssiException {
		this.queryManager = QueryManager.getInstance();
	}

	/**
	 * Returns list of pending content items to process
	 * 
	 * @param queueId (required): queue ID
	 * @param maxItems (optional): maximum number of items (default: 1000)
	 * @param markItems (optional): mark items as "in_process" (default: True)
	 * @param key (required): authentication key
	 * 
	 * @return Returns item list in JSON format
	 * 
	 * <br><br>JSON Response:<br>
	 * <code>
	 * {
     *      "meta":<meta object>,
     *      "data":{
     *               "items":[<list of item ids>]                   
     *       }
     * }
	 * </code>
	 * 
	 *  <br><br>List of returned status type errors.
	 *  <br>
	 *  <br><code>StatusType.ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED</code> (Error 202) if the required parameter queue ID (queue_id) is not defined.
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
	@GET
	@Produces("application/json; charset=utf-8")
	public Response queuePendingServiceGET(
			@QueryParam("queueId") String queueId,
			@QueryParam("maxItems") @DefaultValue("1000") Integer maxItems,
			@QueryParam("markItems") @DefaultValue("True") Boolean markItems,
			@QueryParam("key") String key) {
		try {
			
			// check undefined params.
			if (isNull(queueId) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_QUEUE_ID_NOT_DEFINED).toResponse();
			}
			else if (isNull(key) == true) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_PARAMETER_KEY_NOT_DEFINED).toResponse();
			}
			
			// check valid key
			if (queryManager.isKeyValid(key) == false) {
				return new JSONResponse(JSONMeta.StatusType.ERROR_INVALID_KEY).toResponse();
			}
			
			// get item list
			List<String> itemList = queryManager.getQueuePending(queueId, maxItems, markItems);
			
			// build JSONResponse
			JSONMeta meta = new JSONMeta(JSONMeta.StatusType.SUCCESS, String.format("%d items retrieved successfully",itemList.size()));
			JSONResponse response = new JSONResponse(meta, itemList);
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