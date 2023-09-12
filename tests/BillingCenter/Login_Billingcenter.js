import { textbox,mouseclick } from "../../utils/helper"; //importing functions from utils
import { fixture,test,Selector } from "testcafe";
import conf from '../../utils/.testcaferc' //COnfiguration file
import Data from '../../data/Login_BillingCenter.json'; //Data json file
import bcLoc from '../../Page_Object_Model/BillingCenterLocators' //Locators for billing

class Login_BC{
    Login_BC(){
        fixture(`Login Billing center`)//Declaring fixture
        .page(conf.bc_url);//Page Url
        Data.forEach(data=>{ //Json test data
        test (`Login in billing center`, async t=>{
             //waiting for elements for doing actions
            await t.maximizeWindow() // Maximize the window
            //Login Application
            await textbox(bcLoc.Login_user,data.Login_username)
            await textbox(bcLoc.Login_pass,data.Login_password)
            await mouseclick(bcLoc.Login_submitBtn)
            await t.takeScreenshot('LoginSuccessfull.png')
        })
    })
}
}
export default new Login_BC();