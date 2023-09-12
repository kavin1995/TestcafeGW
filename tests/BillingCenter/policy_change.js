import { textbox,mouseclick } from "../../utils/helper"; //importing functions from utils
import { fixture,test,Selector } from "testcafe";
import conf from '../../utils/.testcaferc' //COnfiguration file
import Data from '../../data/BillingCenterDataSet.json'; //Data json file
import bcLoc from '../../Page_Object_Model/BC_PolicyChange' //Locators for billing

class BC_Policychange{
    BC_PolicyChange(){
        fixture(`Polciy change in Billing center`)//Declaring fixture
        .page(conf.bc_url);//Page Url
        Data.forEach(data=>{ //Json test data
        test (`Change policy : '${data.BC_policynumber}' in billing center`, async t=>{
             //waiting for elements for doing actions
            await t.maximizeWindow() // Maximize the window
            //Login Application
            await textbox(bcLoc.Login_user,data.BC_Login_username)
            await textbox(bcLoc.Login_pass,data.BC_Login_password)
            await mouseclick(bcLoc.Login_submitBtn)
            await t.pressKey('alt+P')
            await textbox(bcLoc.BC_policy_search, data.BC_policynumber)
            await t.pressKey('enter')
            await mouseclick(bcLoc.BC_Action_Menu)
            await mouseclick(bcLoc.BC_Policy_Change)
            await textbox(bcLoc.BC_Effective_date, data.BC_change_Effectivedate)
            await mouseclick(bcLoc.BC_next)
            await mouseclick(bcLoc.BC_Finish)
        })
    })
}
}
export default new BC_Policychange();