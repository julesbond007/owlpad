package com.owlpad.domain.search;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author Jay Paulynice
 *
 */
@XmlRootElement(name = "docResponse")
public class DocResponse {
    private StatusType status;
    private String source;
    private String errorMessage;

    /**
     * @return the status
     */
    public StatusType getStatus() {
        return status;
    }

    /**
     * @return the source
     */
    public String getSource() {
        return source;
    }

    /**
     * @return the errorMessage
     */
    public String getErrorMessage() {
        return errorMessage;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(final StatusType status) {
        this.status = status;
    }

    /**
     * @param source the source to set
     */
    public void setSource(final String source) {
        this.source = source;
    }

    /**
     * @param errorMessage the errorMessage to set
     */
    public void setErrorMessage(final String errorMessage) {
        this.errorMessage = errorMessage;
    }

}
