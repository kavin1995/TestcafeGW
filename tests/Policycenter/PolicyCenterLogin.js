import { textbox,mouseclick } from "../../utils/helper"; //importing functions from utils
import { fixture,test,Selector } from "testcafe";
import conf from '../../utils/.testcaferc.js' //COnfiguration file
import Data from '../../data/Login_PolicyCenter.json'; //Data json file
import bcLoc from '../../Page_Object_Model/BillingCenterLocators' //Locators for billing

class Login_PC{
    Login_PC(){
        fixture(`Login Policy center`)//Declaring fixture
        .page(conf.url);//Page Url
        Data.forEach(data=>{ //Json test data
        test (`Login into Guidewire Application - Policy center`, async t=>{
             //waiting for elements for doing actions
            await t.maximizeWindow() // Maximize the window
            //Login Application
            await textbox(bcLoc.Login_user,data.Login_username)
            await textbox(bcLoc.Login_pass,data.Login_password)
            await mouseclick(bcLoc.Login_submitBtn)
            await t.takeScreenshot('PolicyCenter_LoginSuccessfull.png')
            //await t.expect(Selector('[id="DesktopActivities:DesktopActivitiesScreen:0"]').innerText).contains('My Activities')
        })
    })
}
}
export default new Login_PC();