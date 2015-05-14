

/* First created by JCasGen Thu May 07 16:47:17 CEST 2015 */
package eu.eumssi.uima.ts;

import org.apache.uima.jcas.JCas; 
import org.apache.uima.jcas.JCasRegistry;
import org.apache.uima.jcas.cas.TOP_Type;

import org.apache.uima.jcas.tcas.Annotation;


/** 
 * Updated by JCasGen Thu May 07 16:47:17 CEST 2015
 * XML source: /home/jgrivolla/GitHub/EUMSSI-platform/uima/EumssiTS/src/main/resources/eu/eumssi/uima/ts/media.xml
 * @generated */
public class MediaSegment extends Annotation {
  /** @generated
   * @ordered 
   */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = JCasRegistry.register(MediaSegment.class);
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
  protected MediaSegment() {/* intentionally empty block */}
    
  /** Internal - constructor used by generator 
   * @generated
   * @param addr low level Feature Structure reference
   * @param type the type of this Feature Structure 
   */
  public MediaSegment(int addr, TOP_Type type) {
    super(addr, type);
    readObject();
  }
  
  /** @generated
   * @param jcas JCas to which this Feature Structure belongs 
   */
  public MediaSegment(JCas jcas) {
    super(jcas);
    readObject();   
  } 

  /** @generated
   * @param jcas JCas to which this Feature Structure belongs
   * @param begin offset to the begin spot in the SofA
   * @param end offset to the end spot in the SofA 
  */  
  public MediaSegment(JCas jcas, int begin, int end) {
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
  //* Feature: beginTime

  /** getter for beginTime - gets 
   * @generated
   * @return value of the feature 
   */
  public int getBeginTime() {
    if (MediaSegment_Type.featOkTst && ((MediaSegment_Type)jcasType).casFeat_beginTime == null)
      jcasType.jcas.throwFeatMissing("beginTime", "eu.eumssi.uima.ts.MediaSegment");
    return jcasType.ll_cas.ll_getIntValue(addr, ((MediaSegment_Type)jcasType).casFeatCode_beginTime);}
    
  /** setter for beginTime - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setBeginTime(int v) {
    if (MediaSegment_Type.featOkTst && ((MediaSegment_Type)jcasType).casFeat_beginTime == null)
      jcasType.jcas.throwFeatMissing("beginTime", "eu.eumssi.uima.ts.MediaSegment");
    jcasType.ll_cas.ll_setIntValue(addr, ((MediaSegment_Type)jcasType).casFeatCode_beginTime, v);}    
   
    
  //*--------------*
  //* Feature: endTime

  /** getter for endTime - gets 
   * @generated
   * @return value of the feature 
   */
  public int getEndTime() {
    if (MediaSegment_Type.featOkTst && ((MediaSegment_Type)jcasType).casFeat_endTime == null)
      jcasType.jcas.throwFeatMissing("endTime", "eu.eumssi.uima.ts.MediaSegment");
    return jcasType.ll_cas.ll_getIntValue(addr, ((MediaSegment_Type)jcasType).casFeatCode_endTime);}
    
  /** setter for endTime - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setEndTime(int v) {
    if (MediaSegment_Type.featOkTst && ((MediaSegment_Type)jcasType).casFeat_endTime == null)
      jcasType.jcas.throwFeatMissing("endTime", "eu.eumssi.uima.ts.MediaSegment");
    jcasType.ll_cas.ll_setIntValue(addr, ((MediaSegment_Type)jcasType).casFeatCode_endTime, v);}    
   
    
  //*--------------*
  //* Feature: confidence

  /** getter for confidence - gets 
   * @generated
   * @return value of the feature 
   */
  public double getConfidence() {
    if (MediaSegment_Type.featOkTst && ((MediaSegment_Type)jcasType).casFeat_confidence == null)
      jcasType.jcas.throwFeatMissing("confidence", "eu.eumssi.uima.ts.MediaSegment");
    return jcasType.ll_cas.ll_getDoubleValue(addr, ((MediaSegment_Type)jcasType).casFeatCode_confidence);}
    
  /** setter for confidence - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setConfidence(double v) {
    if (MediaSegment_Type.featOkTst && ((MediaSegment_Type)jcasType).casFeat_confidence == null)
      jcasType.jcas.throwFeatMissing("confidence", "eu.eumssi.uima.ts.MediaSegment");
    jcasType.ll_cas.ll_setDoubleValue(addr, ((MediaSegment_Type)jcasType).casFeatCode_confidence, v);}    
  }

    