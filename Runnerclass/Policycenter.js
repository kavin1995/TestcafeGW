import Newbusiness from '../tests/Policycenter/newsubmission'
import loginpc from '../tests/Policycenter/PolicyCenterLogin'
import cancelpolicy from '../tests/Policycenter/cancellationtest'
import policychange from '../tests/Policycenter/policychange'
import acccreate from '../tests/Policycenter/accountcreation'
import reinpol from '../tests/Policycenter/reinstatetest'
import renewpol from '../tests/Policycenter/renewpolicy'
import rewrite from '../tests/Policycenter/Rewrite'
import CAnewsubmission from '../tests/Policycenter/CA_newsubmission'
import CApolicychange from '../tests/Policycenter/CA_Policychange'
import CA_CancelPolicy from '../tests/Policycenter/CA_CancelPolicy'
import CA_reinstate from '../tests/Policycenter/CA_reinstate'
import CA_renew from '../tests/Policycenter/CA_renew'
import CA_rewrite from '../tests/Policycenter/CA_rewrite'
var xlsx=require("xlsx");
var workbook=xlsx.readFile("data/ExcelDataSet.xlsx");
var NumofRows,excelRowscount
let sheet
class excelRows{
     readexceldata()
    {
        sheet=workbook.Sheets[workbook.SheetNames[0]];
        excelRowscount = xlsx.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
        NumofRows=excelRowscount.length;
        
          for(let i=0;i<NumofRows-7;i++)
        {
            if((sheet[`B${i+2}`])='Personal Auto')
            {  
                loginpc.Login_PC()
                acccreate.acccreation()  
                Newbusiness.NewBusiness() 
                cancelpolicy.cancellation()
                rewrite.Rewritepolicy()
                policychange.policychangetransaction()
                cancelpolicy.cancellation()
                reinpol.reinstatepolicy()
                renewpol.renewpolicy()
                
                

            } 
            if((sheet[`B${i+8}`])='Commercial Auto')
            {
              CAnewsubmission.CA_NewBusiness()
              CA_CancelPolicy.CA_cancellation()
              CA_rewrite.CA_rewritepolicy()
              CApolicychange.CA_Policychange()
              CA_CancelPolicy.CA_cancellation()
              CA_reinstate.CA_reinstatepolicy()
              CA_renew.CA_renewpolicy()
            }

            else{
              console.log("No TestCase to be Executed")
            }
          
        }
      
        
    }
    
    
    
}
export default new excelRows();