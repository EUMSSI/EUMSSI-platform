
/* First created by JCasGen Wed Mar 25 14:14:14 CET 2015 */
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

/** 
 * Updated by JCasGen Thu May 07 16:47:17 CEST 2015
 * @generated */
public class AsrToken_Type extends MediaToken_Type {
  /** @generated 
   * @return the generator for this type
   */
  @Override
  protected FSGenerator getFSGenerator() {return fsGenerator;}
  /** @generated */
  private final FSGenerator fsGenerator = 
    new FSGenerator() {
      public FeatureStructure createFS(int addr, CASImpl cas) {
  			 if (AsrToken_Type.this.useExistingInstance) {
  			   // Return eq fs instance if already created
  		     FeatureStructure fs = AsrToken_Type.this.jcas.getJfsFromCaddr(addr);
  		     if (null == fs) {
  		       fs = new AsrToken(addr, AsrToken_Type.this);
  			   AsrToken_Type.this.jcas.putJfsFromCaddr(addr, fs);
  			   return fs;
  		     }
  		     return fs;
        } else return new AsrToken(addr, AsrToken_Type.this);
  	  }
    };
  /** @generated */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = AsrToken.typeIndexID;
  /** @generated 
     @modifiable */
  @SuppressWarnings ("hiding")
  public final static boolean featOkTst = JCasRegistry.getFeatOkTst("eu.eumssi.uima.ts.AsrToken");
 
  /** @generated */
  final Feature casFeat_tokenType;
  /** @generated */
  final int     casFeatCode_tokenType;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public String getTokenType(int addr) {
        if (featOkTst && casFeat_tokenType == null)
      jcas.throwFeatMissing("tokenType", "eu.eumssi.uima.ts.AsrToken");
    return ll_cas.ll_getStringValue(addr, casFeatCode_tokenType);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setTokenType(int addr, String v) {
        if (featOkTst && casFeat_tokenType == null)
      jcas.throwFeatMissing("tokenType", "eu.eumssi.uima.ts.AsrToken");
    ll_cas.ll_setStringValue(addr, casFeatCode_tokenType, v);}
    
  



  /** initialize variables to correspond with Cas Type and Features
	 * @generated
	 * @param jcas JCas
	 * @param casType Type 
	 */
  public AsrToken_Type(JCas jcas, Type casType) {
    super(jcas, casType);
    casImpl.getFSClassRegistry().addGeneratorForType((TypeImpl)this.casType, getFSGenerator());

 
    casFeat_tokenType = jcas.getRequiredFeatureDE(casType, "tokenType", "uima.cas.String", featOkTst);
    casFeatCode_tokenType  = (null == casFeat_tokenType) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_tokenType).getCode();

  }
}



    