

/* First created by JCasGen Fri Dec 12 18:26:37 CET 2014 */
package eu.eumssi.uima.ts;

import org.apache.uima.jcas.JCas; 
import org.apache.uima.jcas.JCasRegistry;
import org.apache.uima.jcas.cas.TOP_Type;

import org.apache.uima.jcas.cas.FSList;
import de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData;


/** 
 * Updated by JCasGen Mon Jan 12 17:53:37 CET 2015
 * XML source: /home/jgrivolla/workspace/EumssiTS/src/main/resources/eu/eumssi/uima/ts/metadata.xml
 * @generated */
public class SourceMeta extends DocumentMetaData {
  /** @generated
   * @ordered 
   */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = JCasRegistry.register(SourceMeta.class);
  /** @generated
   * @ordered 
   */
  @SuppressWarnings ("hiding")
  public final static int type = typeIndexID;
  /** @generated
   * @return index of the type  
   */
  @Override
  public              int getTypeIndexID() {return typeIndexID;}
 
  /** Never called.  Disable default constructor
   * @generated */
  protected SourceMeta() {/* intentionally empty block */}
    
  /** Internal - constructor used by generator 
   * @generated
   * @param addr low level Feature Structure reference
   * @param type the type of this Feature Structure 
   */
  public SourceMeta(int addr, TOP_Type type) {
    super(addr, type);
    readObject();
  }
  
  /** @generated
   * @param jcas JCas to which this Feature Structure belongs 
   */
  public SourceMeta(JCas jcas) {
    super(jcas);
    readObject();   
  } 

  /** @generated
   * @param jcas JCas to which this Feature Structure belongs
   * @param begin offset to the begin spot in the SofA
   * @param end offset to the end spot in the SofA 
  */  
  public SourceMeta(JCas jcas, int begin, int end) {
    super(jcas);
    setBegin(begin);
    setEnd(end);
    readObject();
  }   

  /** 
   * <!-- begin-user-doc -->
   * Write your own initialization here
   * <!-- end-user-doc -->
   *
   * @generated modifiable 
   */
  private void readObject() {/*default - does nothing empty block */}
     
 
    
  //*--------------*
  //* Feature: author

  /** getter for author - gets 
   * @generated
   * @return value of the feature 
   */
  public String getAuthor() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_author == null)
      jcasType.jcas.throwFeatMissing("author", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_author);}
    
  /** setter for author - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setAuthor(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_author == null)
      jcasType.jcas.throwFeatMissing("author", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_author, v);}    
   
    
  //*--------------*
  //* Feature: category

  /** getter for category - gets 
   * @generated
   * @return value of the feature 
   */
  public String getCategory() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_category == null)
      jcasType.jcas.throwFeatMissing("category", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_category);}
    
  /** setter for category - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setCategory(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_category == null)
      jcasType.jcas.throwFeatMissing("category", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_category, v);}    
   
    
  //*--------------*
  //* Feature: datePublished

  /** getter for datePublished - gets 
   * @generated
   * @return value of the feature 
   */
  public String getDatePublished() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_datePublished == null)
      jcasType.jcas.throwFeatMissing("datePublished", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_datePublished);}
    
  /** setter for datePublished - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setDatePublished(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_datePublished == null)
      jcasType.jcas.throwFeatMissing("datePublished", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_datePublished, v);}    
   
    
  //*--------------*
  //* Feature: description

  /** getter for description - gets 
   * @generated
   * @return value of the feature 
   */
  public String getDescription() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_description == null)
      jcasType.jcas.throwFeatMissing("description", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_description);}
    
  /** setter for description - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setDescription(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_description == null)
      jcasType.jcas.throwFeatMissing("description", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_description, v);}    
   
    
  //*--------------*
  //* Feature: keywords

  /** getter for keywords - gets 
   * @generated
   * @return value of the feature 
   */
  public FSList getKeywords() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_keywords == null)
      jcasType.jcas.throwFeatMissing("keywords", "eu.eumssi.uima.ts.SourceMeta");
    return (FSList)(jcasType.ll_cas.ll_getFSForRef(jcasType.ll_cas.ll_getRefValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_keywords)));}
    
  /** setter for keywords - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setKeywords(FSList v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_keywords == null)
      jcasType.jcas.throwFeatMissing("keywords", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setRefValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_keywords, jcasType.ll_cas.ll_getFSRef(v));}    
   
    
  //*--------------*
  //* Feature: headline

  /** getter for headline - gets 
   * @generated
   * @return value of the feature 
   */
  public String getHeadline() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_headline == null)
      jcasType.jcas.throwFeatMissing("headline", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_headline);}
    
  /** setter for headline - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setHeadline(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_headline == null)
      jcasType.jcas.throwFeatMissing("headline", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_headline, v);}    
   
    
  //*--------------*
  //* Feature: httpHigh

  /** getter for httpHigh - gets 
   * @generated
   * @return value of the feature 
   */
  public String getHttpHigh() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_httpHigh == null)
      jcasType.jcas.throwFeatMissing("httpHigh", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_httpHigh);}
    
  /** setter for httpHigh - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setHttpHigh(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_httpHigh == null)
      jcasType.jcas.throwFeatMissing("httpHigh", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_httpHigh, v);}    
   
    
  //*--------------*
  //* Feature: httpMedium

  /** getter for httpMedium - gets 
   * @generated
   * @return value of the feature 
   */
  public String getHttpMedium() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_httpMedium == null)
      jcasType.jcas.throwFeatMissing("httpMedium", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_httpMedium);}
    
  /** setter for httpMedium - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setHttpMedium(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_httpMedium == null)
      jcasType.jcas.throwFeatMissing("httpMedium", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_httpMedium, v);}    
   
    
  //*--------------*
  //* Feature: page

  /** getter for page - gets 
   * @generated
   * @return value of the feature 
   */
  public String getPage() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_page == null)
      jcasType.jcas.throwFeatMissing("page", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_page);}
    
  /** setter for page - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setPage(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_page == null)
      jcasType.jcas.throwFeatMissing("page", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_page, v);}    
   
    
  //*--------------*
  //* Feature: publisher

  /** getter for publisher - gets 
   * @generated
   * @return value of the feature 
   */
  public String getPublisher() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_publisher == null)
      jcasType.jcas.throwFeatMissing("publisher", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_publisher);}
    
  /** setter for publisher - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setPublisher(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_publisher == null)
      jcasType.jcas.throwFeatMissing("publisher", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_publisher, v);}    
   
    
  //*--------------*
  //* Feature: duration

  /** getter for duration - gets 
   * @generated
   * @return value of the feature 
   */
  public String getDuration() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_duration == null)
      jcasType.jcas.throwFeatMissing("duration", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_duration);}
    
  /** setter for duration - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setDuration(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_duration == null)
      jcasType.jcas.throwFeatMissing("duration", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_duration, v);}    
   
    
  //*--------------*
  //* Feature: text

  /** getter for text - gets 
   * @generated
   * @return value of the feature 
   */
  public String getText() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_text == null)
      jcasType.jcas.throwFeatMissing("text", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_text);}
    
  /** setter for text - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setText(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_text == null)
      jcasType.jcas.throwFeatMissing("text", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_text, v);}    
   
    
  //*--------------*
  //* Feature: url

  /** getter for url - gets 
   * @generated
   * @return value of the feature 
   */
  public String getUrl() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_url == null)
      jcasType.jcas.throwFeatMissing("url", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_url);}
    
  /** setter for url - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setUrl(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_url == null)
      jcasType.jcas.throwFeatMissing("url", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_url, v);}    
   
    
  //*--------------*
  //* Feature: youtubeVideoID

  /** getter for youtubeVideoID - gets 
   * @generated
   * @return value of the feature 
   */
  public String getYoutubeVideoID() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_youtubeVideoID == null)
      jcasType.jcas.throwFeatMissing("youtubeVideoID", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_youtubeVideoID);}
    
  /** setter for youtubeVideoID - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setYoutubeVideoID(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_youtubeVideoID == null)
      jcasType.jcas.throwFeatMissing("youtubeVideoID", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_youtubeVideoID, v);}    
   
    
  //*--------------*
  //* Feature: source

  /** getter for source - gets 
   * @generated
   * @return value of the feature 
   */
  public String getSource() {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_source == null)
      jcasType.jcas.throwFeatMissing("source", "eu.eumssi.uima.ts.SourceMeta");
    return jcasType.ll_cas.ll_getStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_source);}
    
  /** setter for source - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setSource(String v) {
    if (SourceMeta_Type.featOkTst && ((SourceMeta_Type)jcasType).casFeat_source == null)
      jcasType.jcas.throwFeatMissing("source", "eu.eumssi.uima.ts.SourceMeta");
    jcasType.ll_cas.ll_setStringValue(addr, ((SourceMeta_Type)jcasType).casFeatCode_source, v);}    
  }

    