

/* First created by JCasGen Wed Mar 25 14:14:14 CET 2015 */
package eu.eumssi.uima.ts;

import org.apache.uima.jcas.JCas; 
import org.apache.uima.jcas.JCasRegistry;
import org.apache.uima.jcas.cas.TOP_Type;



/** 
 * Updated by JCasGen Thu May 07 16:47:17 CEST 2015
 * XML source: /home/jgrivolla/GitHub/EUMSSI-platform/uima/EumssiTS/src/main/resources/eu/eumssi/uima/ts/media.xml
 * @generated */
public class AsrToken extends MediaToken {
  /** @generated
   * @ordered 
   */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = JCasRegistry.register(AsrToken.class);
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
  protected AsrToken() {/* intentionally empty block */}
    
  /** Internal - constructor used by generator 
   * @generated
   * @param addr low level Feature Structure reference
   * @param type the type of this Feature Structure 
   */
  public AsrToken(int addr, TOP_Type type) {
    super(addr, type);
    readObject();
  }
  
  /** @generated
   * @param jcas JCas to which this Feature Structure belongs 
   */
  public AsrToken(JCas jcas) {
    super(jcas);
    readObject();   
  } 

  /** @generated
   * @param jcas JCas to which this Feature Structure belongs
   * @param begin offset to the begin spot in the SofA
   * @param end offset to the end spot in the SofA 
  */  
  public AsrToken(JCas jcas, int begin, int end) {
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
  //* Feature: tokenType

  /** getter for tokenType - gets 
   * @generated
   * @return value of the feature 
   */
  public String getTokenType() {
    if (AsrToken_Type.featOkTst && ((AsrToken_Type)jcasType).casFeat_tokenType == null)
      jcasType.jcas.throwFeatMissing("tokenType", "eu.eumssi.uima.ts.AsrToken");
    return jcasType.ll_cas.ll_getStringValue(addr, ((AsrToken_Type)jcasType).casFeatCode_tokenType);}
    
  /** setter for tokenType - sets  
   * @generated
   * @param v value to set into the feature 
   */
  public void setTokenType(String v) {
    if (AsrToken_Type.featOkTst && ((AsrToken_Type)jcasType).casFeat_tokenType == null)
      jcasType.jcas.throwFeatMissing("tokenType", "eu.eumssi.uima.ts.AsrToken");
    jcasType.ll_cas.ll_setStringValue(addr, ((AsrToken_Type)jcasType).casFeatCode_tokenType, v);}    
  }

    