package com.owlpad.domain.index;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Jay Paulynice
 *
 */
@XmlRootElement(name = "indexRequest")
public class IndexRequest {
	private String directoryToIndex;
	private String suffix;
	
	public IndexRequest(){
		
	}

	/**
	 * @return the suffix
	 */
	public String getSuffix() {
		return suffix;
	}

	/**
	 * @param suffix the suffix to set
	 */
	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	/**
	 * @return the directoryToIndex
	 */
	public String getDirectoryToIndex() {
		return directoryToIndex;
	}

	/**
	 * @param directoryToIndex the directoryToIndex to set
	 */
	public void setDirectoryToIndex(String directoryToIndex) {
		this.directoryToIndex = directoryToIndex;
	}

}
