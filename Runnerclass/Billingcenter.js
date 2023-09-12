import billingcenter from '../tests/BillingCenter/billingcenter'
import payment_request from '../tests/BillingCenter/payment_request'
import Login_bc from '../tests/BillingCenter/Login_Billingcenter'
import Policychange from '../tests/BillingCenter/policy_change'
import db_payment from '../tests/BillingCenter/Direct_BillPayment'
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
            
            if((sheet[`B${i+3}`])='New Business')
            {
                Login_bc.Login_BC()
                billingcenter.billingcenter()
                payment_request.paymentrequest()
                Policychange.BC_PolicyChange()
                db_payment.newdirectbillpayment()
            }
          
            else{
              console.log("No TestCase to be Executed")
            }
          
        }
      
        
    }
    
    
    
}
export default new excelRows();
