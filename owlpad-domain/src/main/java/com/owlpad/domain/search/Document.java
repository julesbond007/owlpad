package com.owlpad.domain.search;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * A document is a made up of a list of fields.
 *
 * @author Jay Paulynice
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "document")
public class Document {
    @XmlElement(name = "fields")
    private List<Field> fields;

    /** Default constructor */
    public Document() {
    }

    /**
     * Create document with fields
     *
     * @param fields list of fields for the document
     * */
    public Document(final List<Field> fields) {
        this.setFields(fields);
    }

    /**
     * @return the fields
     */
    public List<Field> getFields() {
        return fields;
    }

    /**
     * @param fields the fields to set
     */
    public void setFields(final List<Field> fields) {
        this.fields = fields;
    }
}
