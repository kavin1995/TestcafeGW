//importing neccessary packages and files from existing files.
import Page from '../../Page_Object_Model/policychangepage'; // Using POM for locators
import Data from '../../data/PolicyCenterDataSet.json';
import conf from '../../utils/.testcaferc.js'
import { Selector } from 'testcafe';
import { getpolicynumber, Policysearch,mouseclick, textbox, Login } from '../../utils/helper';
//Declaring classes.
class policychangetrans{
    policychangetransaction(){
        fixture ('Policy Change Transaction')//Fixture for policy change transaction
        .page(conf.url) // Application url
        //Scenario : Adding the Medical Payment Limit in PA COverages when policy change transaction occurs.    
        Data.forEach(data=>{ //Retriving test data from json file
        test(`Adding Medical Payment Limit as '${data.MedicalPaymentCoverageLimit}'in PA Coverage Screen When Policy Change occurs`,async t=>{            
        await t.maximizeWindow()// maximize the window
        //Application login
        await Login(data.Login_username,data.Login_password)
        await t.expect(Selector('[id="DesktopActivities:DesktopActivitiesScreen:0"]').innerText).contains('My Activities')
        await t.takeScreenshot('LoginSuccessfull.png')
        //Policy searching in policy center and policy change transaction started
        const Policynumber = getpolicynumber()
        await Policysearch(Page.policyretriveinput,Policynumber)
        await t.click(Page.actionbutton)
        await t.click(Page.clickpolicychange)
        await t.takeScreenshot('Policy_Change_Screen.png')
        await t.click(Page.effectivedatepolicychange)
        await t.pressKey('ctrl+a')
        await t.pressKey('backspace')
        await t.typeText(Page.effectivedatepolicychange,data.Effectivedate)
        await t.click(Page.nextbuttonpolicychange)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.clickmedicalpayment)
        await t.pressKey('backspace')
        await t.typeText(Page.clickmedicalpayment,data.MedicalPaymentCoverageLimit)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.policychangequotebtn)
        await t.click(Page.issuepolicybtn)
        await t.click(Page.clickokbtn)
        await t.takeScreenshot(`Policyissued for limit of '${data.MedicalPaymentCoverageLimit}' for policy'${Policynumber}'.png` )
    
    })
    })
    }
}
export default new policychangetrans();
