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
@Path("/feedback/report")
public class FeedbackReport {

	/**
	 * Logger for this class and subclasses.
	 */
	protected final Log log = LogFactory.getLog(getClass());

	@Context
	ServletConfig config;

	private QueryManager queryManager;

	public FeedbackReport() throws UnknownHostException, EumssiException {
		this.queryManager = QueryManager.getInstance();
	}

	/**
	 * Report a problem with the EUMSSI system
	 * 
	 * @param state (required): the system state to reproduce the problem
	 * @param comment: comment to describe the problem (free form)
	 * @param type: type of report (e.g. bug, suggestion, ...)
	 * 
	 * @return Returns status message confirming the action
	 * 
	 *  <br><br>List of returned status type errors.
	 *  <br>
	 *	<br><code>StatusType.ERROR_DB_CONNECT</code> (Error 400) if an unhandled error occurred during acquisition of the database connection.
	 *  <br><code>StatusType.ERROR_DB_QUERY</code> (Error 401) if an unhandled error occurred during the query execution.
	 *  <br><code>StatusType.ERROR_UNKNOWN</code> (Error 999) if an unhandled exception is thrown.
	 *
	 */
	@POST
	@Produces("application/json; charset=utf-8")
	public Response feedbackReportPOST(
			@FormParam("state") String state,
			@FormParam("comment") String comment,
			@FormParam("type") String type) {
		try {
			queryManager.feedbackReport(state, comment, type);
			// build JSONResponse
			JSONMeta meta = new JSONMeta(JSONMeta.StatusType.SUCCESS, "feedback recorded");
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
	public Response feedbackReportGET(
			@QueryParam("state") String state,
			@QueryParam("comment") String comment,
			@QueryParam("type") String type) {
		return feedbackReportPOST(state, comment, type);
	}

	static private boolean isNull(Object... objects) {
		for (Object o : objects) {
			if (o == null || o.equals(new String("")))
				return true;
		}
		return false;
	}


}