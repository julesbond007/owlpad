package com.owlpad.service.impl.search;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import com.owlpad.domain.search.DocResponse;
import com.owlpad.domain.search.Document;
import com.owlpad.domain.search.SearchRequest;
import com.owlpad.domain.search.SearchResponse;
import com.owlpad.domain.search.StatusType;
import com.owlpad.service.search.SearchService;

import org.apache.lucene.util.Version;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Apache Lucene searchService implementation.
 * 
 * @author Jay Paulynice
 * 
 */
@Service("search")
public class SearchServiceImpl implements SearchService{
	private static final Logger logger = LoggerFactory.getLogger(SearchServiceImpl.class);

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.owlpad.search.service.SearchService#search(com.owlpad.search.domain.SearchRequest)
	 */
	@Override
	public Response search(SearchRequest searchRequest){
		SearchResponse response = new SearchResponse();
		String query = searchRequest.getKeyWord();
		int hits = searchRequest.getHitsPerPage();
		
		File indexDir = new File("/Users/julespaulynice/Documents/luna/index");
		Directory directory = null;
		try {
			directory = FSDirectory.open(indexDir);
			response = searchIndex(directory, query, hits);
			response.setStatus(StatusType.SUCCESS);
		} 
		catch (Exception e) {
			logger.info("Exception while calling search.  Exception: "+e);
			return Response.serverError().build();
		}
		return Response.ok(response).type(MediaType.APPLICATION_JSON).build();
	}

	/**
	 * Search the index for our query string and return only the hitsPerPage count.
	 * 
	 * @param indexDir
	 * @param queryStr
	 * @param hitsPerPage
	 * @return
	 * @throws Exception
	 */
	private SearchResponse searchIndex(Directory indexDir, String queryStr,int hitsPerPage) throws Exception {

		SearchResponse response = new SearchResponse();
		List<Document> results = new ArrayList<Document>();

		DirectoryReader ireader = DirectoryReader.open(indexDir);
		IndexSearcher searcher = new IndexSearcher(ireader);
		QueryParser parser = new QueryParser(Version.LUCENE_48, "contents", new StandardAnalyzer(Version.LUCENE_48));

		Query query = parser.parse(queryStr);
		ScoreDoc[] hits = searcher.search(query, null, Integer.MAX_VALUE).scoreDocs;
		
		int docsPerPage = hits.length < hitsPerPage ? hits.length : hitsPerPage;

		for (int i = 0; i < docsPerPage; i++) {
			int docId = hits[i].doc;
			int docPosition = i+1;
			org.apache.lucene.document.Document doc = searcher.doc(docId);
			Document docResult = new Document(doc, docPosition);

			results.add(docResult);
		}
		response.setDocuments(results);
		response.setTotalDocuments(hits.length);

		return response;
	}

	@Override
	public DocResponse getDocContentById(String docId) {
		//TODO: add implementation
		return null;
	}
}
