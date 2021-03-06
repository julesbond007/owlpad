package com.owlpad.service.impl.search;

import static com.google.common.base.Preconditions.checkNotNull;

import java.util.Map;

import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.Response;

import org.elasticsearch.action.get.GetRequestBuilder;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.node.NodeClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.owlpad.domain.exception.NoDocFoundException;
import com.owlpad.domain.search.DocResponse;
import com.owlpad.domain.search.SearchRequest;
import com.owlpad.domain.search.SearchResponse;
import com.owlpad.elasticsearch.client.NodeClientFactoryBean;
import com.owlpad.service.mapper.SearchResponseMapper;
import com.owlpad.service.search.SearchService;

/**
 * Elastic Search implementation of {@link SearchService}
 *
 * @author Jay Paulynice
 *
 */
@Service
public class ESSearchServiceImpl implements SearchService {
    private final Logger LOG = LoggerFactory.getLogger(getClass());

    /** Elastic search node client factory bean */
    private final NodeClientFactoryBean nodeClientFactoryBean;

    /** Elastic search node client */
    private final NodeClient client;

    /**
     * Default constructor
     *
     * @param nodeClientFactoryBean factory for ES node client
     * @throws Exception if unable to create object
     */
    @Autowired
    public ESSearchServiceImpl(final NodeClientFactoryBean nodeClientFactoryBean)
            throws Exception {
        this.nodeClientFactoryBean = nodeClientFactoryBean;
        this.client = this.nodeClientFactoryBean.getObject();
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.owlpad.service.search.SearchService#search(com.owlpad.domain.search
     * .SearchRequest)
     */
    @Override
    public Response search(final SearchRequest searchRequest) {
        checkNotNull(searchRequest, "No search request specified.");
        SearchResponse res;

        final int from = searchRequest.getResultStart();
        final int size = searchRequest.getHitsPerPage();
        final boolean paging = searchRequest.isPaging();
        final String keyWord = searchRequest.getKeyWord();

        try {
            final org.elasticsearch.action.search.SearchResponse response = search(
                    paging, keyWord, from, size);
            res = SearchResponseMapper.map(response, from);
        } catch (final Exception e) {
            LOG.error("Exception while executing search", e);
            return Response.serverError().entity(e.getMessage()).build();
        }

        final GenericEntity<SearchResponse> entity = new GenericEntity<SearchResponse>(
                res) {
        };
        return Response.ok(entity).build();
    }

    /**
     * Execute search given parameters. If we're paging, we don't need to add
     * aggregations.
     *
     * @param paging boolean to indicate whether we're paging through the
     *        results
     * @param keyWord the key words to search for
     * @param from where results start
     * @param size the number of results to return
     * @return response of search
     */
    private org.elasticsearch.action.search.SearchResponse search(
            final boolean isPaging, final String keyWord, final int from,
            final int size) throws Exception {

        final SearchRequestBuilder builder = client
                .prepareSearch("owlpad-index").setTypes("docs")
                .setSearchType(SearchType.QUERY_THEN_FETCH)
                .setQuery(QueryBuilders.queryString(keyWord)).setFrom(from)
                .setSize(size);

        if (!isPaging) {
            builder.addAggregation(
                    AggregationBuilders.terms("authors").field("author"))
                    .addAggregation(
                            AggregationBuilders.terms("docTypes").field(
                                    "docType"));
        }

        return builder.execute().actionGet();
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.owlpad.service.search.SearchService#getDocById(java.lang.String)
     */
    @Override
    public Response search(final String docId) {
        checkNotNull(docId, "Document id is required to get document.");

        final GetRequestBuilder builder = client.prepareGet("owlpad-index",
                "docs", docId);
        final GetResponse response = builder.execute().actionGet();
        final Map<String, Object> sourceMap = response.getSourceAsMap();
        if (sourceMap == null) {
            throw new NoDocFoundException("No documents found with id: "
                    + docId);
        }
        final DocResponse res = new DocResponse();
        final String source = (String) sourceMap.get("contents");
        res.setSource(source);
        final GenericEntity<DocResponse> entity = new GenericEntity<DocResponse>(
                res) {
        };
        return Response.ok(entity).build();
    }
}
