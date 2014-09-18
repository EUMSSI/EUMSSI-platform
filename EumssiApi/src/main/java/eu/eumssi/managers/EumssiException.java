package eu.eumssi.managers;

import eu.eumssi.api.json.JSONMeta.StatusType;

/**
 * This class represents an application domain exception.
 * 
 * @author oscar.serrano
 *
 */
public class EumssiException extends Exception {
	
	private static final long serialVersionUID = 1L;
	
	/**
	 * Status type instance attached to the exception.
	 */
	private StatusType statusType;

	
	public EumssiException(StatusType statusType) {
		super();
		this.statusType = statusType;
	}
	
	/**
	 * @return Status type instance attached to the exception.
	 */
	public StatusType getStatusType() {
		return statusType;
	}

}
