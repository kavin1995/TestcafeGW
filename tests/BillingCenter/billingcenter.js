import { textbox,mouseclick } from "../../utils/helper"; //importing functions from utils
import { fixture,test,Selector } from "testcafe";
import conf from '../../utils/.testcaferc' //COnfiguration file
import Data from '../../data/BillingCenterDataSet.json'; //Data json file
import bcLoc from '../../Page_Object_Model/BillingCenterLocators' //Locators for billing


class BillingCenter{
    billingcenter(){
        fixture(`Policy number verification in Billing center`)//Declaring fixture
        .page(conf.bc_url);//Page Url
        Data.forEach(data=>{ //Json test data
        test (`Verifying policy number '${data.BC_policynumber}' in billing center`, async t=>{
            //waiting for elements for doing actions
            await t.maximizeWindow() // Maximize the window
            //Login Application
            await textbox(bcLoc.Login_user,data.BC_Login_username)
            await textbox(bcLoc.Login_pass,data.BC_Login_password)
            await mouseclick(bcLoc.Login_submitBtn)
            //await t.takeScreenshot('LoginSuccessfull.png')            
            //Billing center actions
            await t.pressKey('alt+P')
            textbox(bcLoc.BC_policy_search,data.BC_policynumber)
            await t.pressKey('enter')
            await mouseclick(bcLoc.BC_Policy_Details)
            await t.expect(bcLoc.BC_Policy_Number.innerText).eql(data.BC_policynumber)
            await t.expect(bcLoc.BC_effectivedate.innerText).eql(data.BC_effectivedate)
            await t.expect(bcLoc.BC_expirationdate.innerText).eql(data.BC_expirationdate)
            await t.expect(bcLoc.BC_accountnumber.innerText).eql(data.BC_Accountno)
            await t.expect(bcLoc.BC_accountname.innerText).eql(data.BC_Accountname)
            await t.takeScreenshot(`Billing details for policy ${data.PolicyNumber}.png`)
            await mouseclick(bcLoc.BC_transactions)
            await mouseclick(bcLoc.BC_History)
            const table = (Selector('[id="PolicyDetailHistory:PolicyDetailHistoryScreen:PolicyDetailHistoryLV-body"]'))
            const tables =  table.find('div > div > table')
            const tablecount = await tables.count
            console.log(`Number of transactions for policy no ${data.BC_policynumber} is ${tablecount}`)
            for (let i = 0; i < await tables.count; i++) {
                const tableid= await tables.nth(i).getAttribute("id")
                const tablevalue = (Selector(`[id = "${tableid}"]`))
                const row = tablevalue.find('tbody > tr > td')
                const date = await row.child('div').innerText
                const columncount = await row.count
                //console.log(`${i} - transaction date:'${date}'`)
            }
            
            
            
            

            //PolicyDetailHistory:PolicyDetailHistoryScreen:PolicyDetailHistoryLV-body
            
        
    });
    
    

})
}
}
export default new BillingCenter();

    
