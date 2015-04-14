
/* First created by JCasGen Wed Mar 25 12:58:38 CET 2015 */
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
import de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token_Type;

/** 
 * Updated by JCasGen Wed Mar 25 15:13:34 CET 2015
 * @generated */
public class MediaToken_Type extends Token_Type {
  /** @generated 
   * @return the generator for this type
   */
  @Override
  protected FSGenerator getFSGenerator() {return fsGenerator;}
  /** @generated */
  private final FSGenerator fsGenerator = 
    new FSGenerator() {
      public FeatureStructure createFS(int addr, CASImpl cas) {
  			 if (MediaToken_Type.this.useExistingInstance) {
  			   // Return eq fs instance if already created
  		     FeatureStructure fs = MediaToken_Type.this.jcas.getJfsFromCaddr(addr);
  		     if (null == fs) {
  		       fs = new MediaToken(addr, MediaToken_Type.this);
  			   MediaToken_Type.this.jcas.putJfsFromCaddr(addr, fs);
  			   return fs;
  		     }
  		     return fs;
        } else return new MediaToken(addr, MediaToken_Type.this);
  	  }
    };
  /** @generated */
  @SuppressWarnings ("hiding")
  public final static int typeIndexID = MediaToken.typeIndexID;
  /** @generated 
     @modifiable */
  @SuppressWarnings ("hiding")
  public final static boolean featOkTst = JCasRegistry.getFeatOkTst("eu.eumssi.uima.ts.MediaToken");
 
  /** @generated */
  final Feature casFeat_beginTime;
  /** @generated */
  final int     casFeatCode_beginTime;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public int getBeginTime(int addr) {
        if (featOkTst && casFeat_beginTime == null)
      jcas.throwFeatMissing("beginTime", "eu.eumssi.uima.ts.MediaToken");
    return ll_cas.ll_getIntValue(addr, casFeatCode_beginTime);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setBeginTime(int addr, int v) {
        if (featOkTst && casFeat_beginTime == null)
      jcas.throwFeatMissing("beginTime", "eu.eumssi.uima.ts.MediaToken");
    ll_cas.ll_setIntValue(addr, casFeatCode_beginTime, v);}
    
  
 
  /** @generated */
  final Feature casFeat_endTime;
  /** @generated */
  final int     casFeatCode_endTime;
  /** @generated
   * @param addr low level Feature Structure reference
   * @return the feature value 
   */ 
  public int getEndTime(int addr) {
        if (featOkTst && casFeat_endTime == null)
      jcas.throwFeatMissing("endTime", "eu.eumssi.uima.ts.MediaToken");
    return ll_cas.ll_getIntValue(addr, casFeatCode_endTime);
  }
  /** @generated
   * @param addr low level Feature Structure reference
   * @param v value to set 
   */    
  public void setEndTime(int addr, int v) {
        if (featOkTst && casFeat_endTime == null)
      jcas.throwFeatMissing("endTime", "eu.eumssi.uima.ts.MediaToken");
    ll_cas.ll_setIntValue(addr, casFeatCode_endTime, v);}
    
  



  /** initialize variables to correspond with Cas Type and Features
	 * @generated
	 * @param jcas JCas
	 * @param casType Type 
	 */
  public MediaToken_Type(JCas jcas, Type casType) {
    super(jcas, casType);
    casImpl.getFSClassRegistry().addGeneratorForType((TypeImpl)this.casType, getFSGenerator());

 
    casFeat_beginTime = jcas.getRequiredFeatureDE(casType, "beginTime", "uima.cas.Integer", featOkTst);
    casFeatCode_beginTime  = (null == casFeat_beginTime) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_beginTime).getCode();

 
    casFeat_endTime = jcas.getRequiredFeatureDE(casType, "endTime", "uima.cas.Integer", featOkTst);
    casFeatCode_endTime  = (null == casFeat_endTime) ? JCas.INVALID_FEATURE_CODE : ((FeatureImpl)casFeat_endTime).getCode();

  }
}



    