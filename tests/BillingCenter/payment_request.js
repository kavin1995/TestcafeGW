import { textbox, mouseclick, dropdown } from "../../utils/helper";
import {Selector, fixture,test } from "testcafe";
import conf from '../../utils/.testcaferc' //COnfiguration file
import Data from '../../data/BillingCenterDataSet.json'; //Data json file
import PRLoc from '../../Page_Object_Model/BC_Payment_request' //Locators for billing

//Scenario: Requesting payment for policy in Billing center.

class Paymentrequest{
    
    paymentrequest(){
        fixture(`Requesting payment for account in Billing center`)
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
                await mouseclick(PRLoc.PaymentRequest)
                await mouseclick(PRLoc.new)
                await dropdown(PRLoc.newpaymentmethod,data.BC_Paymentmethod)
                await mouseclick(PRLoc.okbutton)
                await textbox(PRLoc.Amount,data.BC_Requestamount)
                await mouseclick(PRLoc.nextbutton)
                await mouseclick(PRLoc.finish)
                await mouseclick(PRLoc.payments)
                await mouseclick(PRLoc.paymentrequestreview)
                const table = PRLoc.requestlist
                const tables = table.find('div > div > table')
                const tablcount =  await tables.count
                console.log(tablcount)
                for (let i = 0; i < tablcount; i++) {
                    const tableid= await tables.nth(i).getAttribute("id")
                    const tablevalue = (Selector(`[id = "${tableid}"]`))
                    const status = tablevalue.find('tbody > tr > td').nth(1)
                    const statustext = await status.child('div').innerText
                    //console.log(statustext)
                    // if (statustext= 'Requested'){
                    //     //await t.expect(data).eql(modifiedamt)
                    //     const amount = tablevalue.find('tbody > tr > td').nth(8)
                    //     const amounttext = await amount.child('div').innerText
                    //     const string = amounttext.replace('$','')
                    //     const modifiedamt = string.replace('.00','')
                    //     //await t.expect(data.BC_Requestamount).eql(modifiedamt)
                    // }
                    
                    //console.log(statustext + "   "+ modifiedamt)
                }
                

            });
            
        })
    }
}
export default new Paymentrequest()