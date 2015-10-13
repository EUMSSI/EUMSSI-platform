package eu.eumssi.api;

import java.net.UnknownHostException;

import javax.servlet.ServletConfig;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
 * Reset list of pending content items to process
 * 
 * @author jens.grivolla
 * 
 */
@Path("/queue/reset")
public class QueueReset {
	
	/**
	 * Logger for this class and subclasses.
	 */
	protected final Log log = LogFactory.getLog(getClass());

	@Context
	ServletConfig config;

	private QueryManager queryManager;

	public QueueReset() throws UnknownHostException, EumssiException {
		this.queryManager = QueryManager.getInstance();
	}

	/**
	 * Reset list of pending content items to process
	 * 
	 * @param queueId (required): queue ID
	 * @param filters (optional): dictionary of additional filters to apply (in MongoDB JSON syntax)
	 * @param inProcessOnly (optional): only reset items marked as "in_process" (i.e. no results uploaded) (default:true)
	 * @param key (required): authentication key
	 * 
	 * @return Returns status message with number reset items
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
	@POST
	@Produces("application/json; charset=utf-8")
	public Response queueResultsPOST(
			@FormParam("queueId") String queueId,
			@FormParam("filters") String filters,
			@FormParam("inProcessOnly") @DefaultValue("True") Boolean inProcessOnly,
			@FormParam("key") String key) {
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
			Integer itemNum = queryManager.resetQueue(queueId, inProcessOnly, filters);
			
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

	@GET
	@Produces("application/json; charset=utf-8")
	public Response queueResultsGET(
			@QueryParam("queueId") String queueId,
			@QueryParam("filters") String filters,
			@QueryParam("inProcessOnly") @DefaultValue("True") Boolean inProcessOnly,
			@QueryParam("key") String key) {
		return queueResultsPOST(queueId, filters, inProcessOnly, key);
	}

	static private boolean isNull(Object... objects) {
		for (Object o : objects) {
			if (o == null || o.equals(new String("")))
				return true;
		}
		return false;
	}
		

}