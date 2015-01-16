
/* First created by JCasGen Fri Dec 12 18:26:37 CET 2014 */
package eu.eumssi.uima.ts;

import org.apache.uima.jcas.JCas;
import org.apache.uima.jcas.JCasRegistry;
import org.apache.uima.cas.impl.CASImpl;
import org.apache.uima.cas.impl.FSGenerator;
import org.apache.uima.cas.FeatureStructure;
import org.apache.uima.cas.impl.TypeImpl;
import org.apache.uima.cas.Type;
import org.apache.uima.cas.impl.FeatureImpl;
import org.apache.uima.cas.Feature;
import de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData_Type;

/** 
 * Updated by JCasGen Mon Jan 12 17:53:37 CET 2015
 * @generated */
public class SourceMeta_Type extends DocumentMetaData_Type {
  /** @generated 
   * @return the generator for this type
   */
  @Override
  protected FSGenerator getFSGenerator() {return fsGenerator;}
  /** @generated */
  private final FSGenerator fsGenerator = 
    new FSGenerator() {
      public FeatureStructure createFS(int addr, CASImpl cas) {
  			 if (SourceMeta_Type.this.useExistingInstance) {
  			   // Return eq fs instance if already created
  		     FeatureStructure fs = SourceMeta_Type.this.jcas.getJfsFromCaddr(addr);
  		     if (null == fs) {
  		       fs = new SourceMeta(addr, SourceMeta_Type.this);
  			   SourceMeta_Type.this.jcas.putJfsFromCaddr(addr, fs);
  			   return fs;
  		     }
  		     return fs;
        } else return new SourceMeta(addr, SourceMeta_Type.this);
  	  }
    };
  /** @generated */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = SourceMeta.typeIndexID;
  /** @generated 
     @modifiable */
  @SuppressWarnings ("hiding")
  public final static boolean featOkTst = JCasRegistry.getFeatOkTst("eu.eumssi.uima.ts.SourceMeta");
 
  /** @generated */
  final Feature casFeat_author;
  /** @generated */
  final int     casFeatCode_author;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getAuthor(int addr) {
        if (featOkTst && casFeat_author == null)
      jcas.throwFeatMissing("author", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_author);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setAuthor(int addr, String v) {
        if (featOkTst && casFeat_author == null)
      jcas.throwFeatMissing("author", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_author, v);}
    
  
 
  /** @generated */
  final Feature casFeat_category;
  /** @generated */
  final int     casFeatCode_category;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getCategory(int addr) {
        if (featOkTst && casFeat_category == null)
      jcas.throwFeatMissing("category", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_category);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setCategory(int addr, String v) {
        if (featOkTst && casFeat_category == null)
      jcas.throwFeatMissing("category", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_category, v);}
    
  
 
  /** @generated */
  final Feature casFeat_datePublished;
  /** @generated */
  final int     casFeatCode_datePublished;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getDatePublished(int addr) {
        if (featOkTst && casFeat_datePublished == null)
      jcas.throwFeatMissing("datePublished", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_datePublished);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setDatePublished(int addr, String v) {
        if (featOkTst && casFeat_datePublished == null)
      jcas.throwFeatMissing("datePublished", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_datePublished, v);}
    
  
 
  /** @generated */
  final Feature casFeat_description;
  /** @generated */
  final int     casFeatCode_description;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getDescription(int addr) {
        if (featOkTst && casFeat_description == null)
      jcas.throwFeatMissing("description", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_description);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setDescription(int addr, String v) {
        if (featOkTst && casFeat_description == null)
      jcas.throwFeatMissing("description", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_description, v);}
    
  
 
  /** @generated */
  final Feature casFeat_keywords;
  /** @generated */
  final int     casFeatCode_keywords;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public int getKeywords(int addr) {
        if (featOkTst && casFeat_keywords == null)
      jcas.throwFeatMissing("keywords", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getRefValue(addr, casFeatCode_keywords);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setKeywords(int addr, int v) {
        if (featOkTst && casFeat_keywords == null)
      jcas.throwFeatMissing("keywords", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setRefValue(addr, casFeatCode_keywords, v);}
    
  
 
  /** @generated */
  final Feature casFeat_headline;
  /** @generated */
  final int     casFeatCode_headline;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getHeadline(int addr) {
        if (featOkTst && casFeat_headline == null)
      jcas.throwFeatMissing("headline", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_headline);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setHeadline(int addr, String v) {
        if (featOkTst && casFeat_headline == null)
      jcas.throwFeatMissing("headline", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_headline, v);}
    
  
 
  /** @generated */
  final Feature casFeat_httpHigh;
  /** @generated */
  final int     casFeatCode_httpHigh;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getHttpHigh(int addr) {
        if (featOkTst && casFeat_httpHigh == null)
      jcas.throwFeatMissing("httpHigh", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_httpHigh);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setHttpHigh(int addr, String v) {
        if (featOkTst && casFeat_httpHigh == null)
      jcas.throwFeatMissing("httpHigh", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_httpHigh, v);}
    
  
 
  /** @generated */
  final Feature casFeat_httpMedium;
  /** @generated */
  final int     casFeatCode_httpMedium;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getHttpMedium(int addr) {
        if (featOkTst && casFeat_httpMedium == null)
      jcas.throwFeatMissing("httpMedium", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_httpMedium);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setHttpMedium(int addr, String v) {
        if (featOkTst && casFeat_httpMedium == null)
      jcas.throwFeatMissing("httpMedium", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_httpMedium, v);}
    
  
 
  /** @generated */
  final Feature casFeat_page;
  /** @generated */
  final int     casFeatCode_page;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getPage(int addr) {
        if (featOkTst && casFeat_page == null)
      jcas.throwFeatMissing("page", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_page);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setPage(int addr, String v) {
        if (featOkTst && casFeat_page == null)
      jcas.throwFeatMissing("page", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_page, v);}
    
  
 
  /** @generated */
  final Feature casFeat_publisher;
  /** @generated */
  final int     casFeatCode_publisher;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getPublisher(int addr) {
        if (featOkTst && casFeat_publisher == null)
      jcas.throwFeatMissing("publisher", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_publisher);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setPublisher(int addr, String v) {
        if (featOkTst && casFeat_publisher == null)
      jcas.throwFeatMissing("publisher", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_publisher, v);}
    
  
 
  /** @generated */
  final Feature casFeat_duration;
  /** @generated */
  final int     casFeatCode_duration;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getDuration(int addr) {
        if (featOkTst && casFeat_duration == null)
      jcas.throwFeatMissing("duration", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_duration);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setDuration(int addr, String v) {
        if (featOkTst && casFeat_duration == null)
      jcas.throwFeatMissing("duration", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_duration, v);}
    
  
 
  /** @generated */
  final Feature casFeat_text;
  /** @generated */
  final int     casFeatCode_text;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getText(int addr) {
        if (featOkTst && casFeat_text == null)
      jcas.throwFeatMissing("text", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_text);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setText(int addr, String v) {
        if (featOkTst && casFeat_text == null)
      jcas.throwFeatMissing("text", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_text, v);}
    
  
 
  /** @generated */
  final Feature casFeat_url;
  /** @generated */
  final int     casFeatCode_url;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getUrl(int addr) {
        if (featOkTst && casFeat_url == null)
      jcas.throwFeatMissing("url", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_url);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setUrl(int addr, String v) {
        if (featOkTst && casFeat_url == null)
      jcas.throwFeatMissing("url", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_url, v);}
    
  
 
  /** @generated */
  final Feature casFeat_youtubeVideoID;
  /** @generated */
  final int     casFeatCode_youtubeVideoID;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getYoutubeVideoID(int addr) {
        if (featOkTst && casFeat_youtubeVideoID == null)
      jcas.throwFeatMissing("youtubeVideoID", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_youtubeVideoID);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setYoutubeVideoID(int addr, String v) {
        if (featOkTst && casFeat_youtubeVideoID == null)
      jcas.throwFeatMissing("youtubeVideoID", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_youtubeVideoID, v);}
    
  
 
  /** @generated */
  final Feature casFeat_source;
  /** @generated */
  final int     casFeatCode_source;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getSource(int addr) {
        if (featOkTst && casFeat_source == null)
      jcas.throwFeatMissing("source", "eu.eumssi.uima.ts.SourceMeta");
    return ll_cas.ll_getStringValue(addr, casFeatCode_source);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setSource(int addr, String v) {
        if (featOkTst && casFeat_source == null)
      jcas.throwFeatMissing("source", "eu.eumssi.uima.ts.SourceMeta");
    ll_cas.ll_setStringValue(addr, casFeatCode_source, v);}
    
  



  /** initialize variables to correspond with Cas Type and Features
	 * @generated
	 * @param jcas JCas
	 * @param casType Type 
	 */
  public SourceMeta_Type(JCas jcas, Type casType) {
    super(jcas, casType);
    casImpl.getFSClassRegistry().addGeneratorForType((TypeImpl)this.casType, getFSGenerator());

 
    casFeat_author = jcas.getRequiredFeatureDE(casType, "author", "uima.cas.String", featOkTst);
    casFeatCode_author  = (null == casFeat_author) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_author).getCode();

 
    casFeat_category = jcas.getRequiredFeatureDE(casType, "category", "uima.cas.String", featOkTst);
    casFeatCode_category  = (null == casFeat_category) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_category).getCode();

 
    casFeat_datePublished = jcas.getRequiredFeatureDE(casType, "datePublished", "uima.cas.String", featOkTst);
    casFeatCode_datePublished  = (null == casFeat_datePublished) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_datePublished).getCode();

 
    casFeat_description = jcas.getRequiredFeatureDE(casType, "description", "uima.cas.String", featOkTst);
    casFeatCode_description  = (null == casFeat_description) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_description).getCode();

 
    casFeat_keywords = jcas.getRequiredFeatureDE(casType, "keywords", "uima.cas.FSList", featOkTst);
    casFeatCode_keywords  = (null == casFeat_keywords) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_keywords).getCode();

 
    casFeat_headline = jcas.getRequiredFeatureDE(casType, "headline", "uima.cas.String", featOkTst);
    casFeatCode_headline  = (null == casFeat_headline) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_headline).getCode();

 
    casFeat_httpHigh = jcas.getRequiredFeatureDE(casType, "httpHigh", "uima.cas.String", featOkTst);
    casFeatCode_httpHigh  = (null == casFeat_httpHigh) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_httpHigh).getCode();

 
    casFeat_httpMedium = jcas.getRequiredFeatureDE(casType, "httpMedium", "uima.cas.String", featOkTst);
    casFeatCode_httpMedium  = (null == casFeat_httpMedium) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_httpMedium).getCode();

 
    casFeat_page = jcas.getRequiredFeatureDE(casType, "page", "uima.cas.String", featOkTst);
    casFeatCode_page  = (null == casFeat_page) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_page).getCode();

 
    casFeat_publisher = jcas.getRequiredFeatureDE(casType, "publisher", "uima.cas.String", featOkTst);
    casFeatCode_publisher  = (null == casFeat_publisher) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_publisher).getCode();

 
    casFeat_duration = jcas.getRequiredFeatureDE(casType, "duration", "uima.cas.String", featOkTst);
    casFeatCode_duration  = (null == casFeat_duration) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_duration).getCode();

 
    casFeat_text = jcas.getRequiredFeatureDE(casType, "text", "uima.cas.String", featOkTst);
    casFeatCode_text  = (null == casFeat_text) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_text).getCode();

 
    casFeat_url = jcas.getRequiredFeatureDE(casType, "url", "uima.cas.String", featOkTst);
    casFeatCode_url  = (null == casFeat_url) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_url).getCode();

 
    casFeat_youtubeVideoID = jcas.getRequiredFeatureDE(casType, "youtubeVideoID", "uima.cas.String", featOkTst);
    casFeatCode_youtubeVideoID  = (null == casFeat_youtubeVideoID) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_youtubeVideoID).getCode();

 
    casFeat_source = jcas.getRequiredFeatureDE(casType, "source", "uima.cas.String", featOkTst);
    casFeatCode_source  = (null == casFeat_source) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_source).getCode();

  }
}



    