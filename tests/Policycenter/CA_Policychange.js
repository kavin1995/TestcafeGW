import Page from '../../Page_Object_Model/policychangepage'; // Using POM for locators
import Data from '../../data/PC_CA_DAta.json';
import conf from '../../utils/.testcaferc.js'
import calob from '../../Page_Object_Model/CA_LOB'
import { Selector } from 'testcafe';
import { CA_getpolicynumber, Policysearch,mouseclick, textbox,Login, dropdown } from '../../utils/helper';
//Declaring classes.
class CA_policychangeTrans{
    CA_Policychange(){
        fixture ('Policy Change Transaction')//Fixture for policy change transaction
        .page(conf.url) // Application url
        //Scenario : Adding the Medical Payment Limit in PA COverages when policy change transaction occurs.    
        Data.forEach(data=>{ //Retriving test data from json file
        test(`Policy change for LOB: Commercial auto`,async t=>{            
        await t.maximizeWindow()// maximize the window
        await Login(data.Login_username,data.Login_password)
        const Policynumber = CA_getpolicynumber()
        await Policysearch(Page.policyretriveinput,Policynumber)
        await t.click(Page.actionbutton)
        await t.click(Page.clickpolicychange)
        await t.click(Page.effectivedatepolicychange)
        await t.pressKey('ctrl+a')
        await t.pressKey('backspace')
        await t.typeText(Page.effectivedatepolicychange,data.Effectivedate)
        await t.click(Page.nextbuttonpolicychange)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await dropdown(calob.changelimt,data.Liabilitylimit)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
        await t.click(Page.changenextbutton)
    })
        })
}
}
export default new CA_policychangeTrans();