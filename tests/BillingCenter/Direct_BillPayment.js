import { textbox, mouseclick, dropdown } from "../../utils/helper";
import {Selector, fixture,test } from "testcafe";
import conf from '../../utils/.testcaferc' //COnfiguration file
import Data from '../../data/BillingCenterDataSet.json'; //Data json file
import PRLoc from '../../Page_Object_Model/BC_Payment_request' //Locators for billing

//Scenario: Requesting payment for policy in Billing center.

class NewDirectBillPayment{
    
    newdirectbillpayment(){
        fixture(`Requesting direct bill payment for account in Billing center`)
        .page(conf.bc_url);
        Data.forEach(data=>{
        test(`Requesting payment of ${data.BC_Requestamount}for account: ${data.BC_Accountno}`, async t=>{
                await t.maximizeWindow();
                await textbox(PRLoc.Login_user,data.BC_Login_username)
                await textbox(PRLoc.Login_pass,data.BC_Login_password )
                await mouseclick(PRLoc.Login_submitBtn)
                await t.takeScreenshot('LoginSuccessfull-Billingcenter.png') 
                await t.pressKey('alt+c')
                await mouseclick(PRLoc.Accountsearch)
                await textbox(PRLoc.Accountsearch,data.BC_Accountno)
                await t.pressKey('enter')
                await mouseclick(PRLoc.ActionButton)
                await mouseclick(PRLoc.NewPayment)
                await mouseclick(PRLoc.Directbill)
                await dropdown(PRLoc.directbillamount, data.BC_DB_amount)
                await mouseclick(PRLoc.db_execute)

            });
            
        })
    }
}
export default new NewDirectBillPayment()