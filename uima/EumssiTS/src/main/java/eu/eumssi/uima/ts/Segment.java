

/* First created by JCasGen Tue Jan 13 16:00:43 CET 2015 */
package eu.eumssi.uima.ts;

import org.apache.uima.jcas.JCas; 
import org.apache.uima.jcas.JCasRegistry;
import org.apache.uima.jcas.cas.TOP_Type;

import org.apache.uima.jcas.tcas.Annotation;


/** 
 * Updated by JCasGen Tue Jan 13 16:00:43 CET 2015
 * XML source: /home/jgrivolla/workspace/EumssiTS/src/main/resources/eu/eumssi/uima/ts/segment.xml
 * @generated */
public class Segment extends Annotation {
  /** @generated
   * @ordered 
   */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = JCasRegistry.register(Segment.class);
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
  protected Segment() {/* intentionally empty block */}
    
  /** Internal - constructor used by generator 
   * @generated
   * @param addr low level Feature Structure reference
   * @param type the type of this Feature Structure 
   */
  public Segment(int addr, TOP_Type type) {
    super(addr, type);
    readObject();
  }
  
  /** @generated
   * @param jcas JCas to which this Feature Structure belongs 
   */
  public Segment(JCas jcas) {
    super(jcas);
    readObject();   
  } 

  /** @generated
   * @param jcas JCas to which this Feature Structure belongs
   * @param begin offset to the begin spot in the SofA
   * @param end offset to the end spot in the SofA 
  */  
  public Segment(JCas jcas, int begin, int end) {
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
  //* Feature: sourceField

  /** getter for sourceField - gets 
   * @generated
   * @return value of the feature 
   */
  public String getSourceField() {
    if (Segment_Type.featOkTst && ((Segment_Type)jcasType).casFeat_sourceField == null)
      jcasType.jcas.throwFeatMissing("sourceField", "eu.eumssi.uima.ts.Segment");
    return jcasType.ll_cas.ll_getStringValue(addr, ((Segment_Type)jcasType).casFeatCode_sourceField);}
    
  /** setter for sourceField - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setSourceField(String v) {
    if (Segment_Type.featOkTst && ((Segment_Type)jcasType).casFeat_sourceField == null)
      jcasType.jcas.throwFeatMissing("sourceField", "eu.eumssi.uima.ts.Segment");
    jcasType.ll_cas.ll_setStringValue(addr, ((Segment_Type)jcasType).casFeatCode_sourceField, v);}    
   
    
  //*--------------*
  //* Feature: name

  /** getter for name - gets 
   * @generated
   * @return value of the feature 
   */
  public String getName() {
    if (Segment_Type.featOkTst && ((Segment_Type)jcasType).casFeat_name == null)
      jcasType.jcas.throwFeatMissing("name", "eu.eumssi.uima.ts.Segment");
    return jcasType.ll_cas.ll_getStringValue(addr, ((Segment_Type)jcasType).casFeatCode_name);}
    
  /** setter for name - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setName(String v) {
    if (Segment_Type.featOkTst && ((Segment_Type)jcasType).casFeat_name == null)
      jcasType.jcas.throwFeatMissing("name", "eu.eumssi.uima.ts.Segment");
    jcasType.ll_cas.ll_setStringValue(addr, ((Segment_Type)jcasType).casFeatCode_name, v);}    
  }

    