//Importing neccessary packages and files
import RewriteLoc from '../../Page_Object_Model/RewriteLocators'
import { textbox, mouseclick,dropdown, Policysearch, CA_getpolicynumber, Login} from '../../utils/helper';
import link from '../../utils/.testcaferc.js'
import logindata from '../../data/PC_CA_DAta.json'

//Declared class
class CA_rewrite{
    CA_rewritepolicy()
    {
        fixture`Rewrite Policy After Cancellation for LOB: commercial auto`//Declared Fixture 
        .page(link.url) //Web-Application url
        
        logindata.forEach(user=>{
            test(`Rewrite Policy`, async t => {   //Declared test         
                await t.maximizeWindow()//maximize the window.
                //Login to the application.
                await Login(user.Login_username,user.Login_password)
                //Reinstate transaction has been started
                const Policynumber = CA_getpolicynumber();
                await Policysearch(RewriteLoc.clickPolicynumField,Policynumber)
                await mouseclick(RewriteLoc.actionbutton)
                await mouseclick(RewriteLoc.rewrite)
                await mouseclick(RewriteLoc.quote)
                await mouseclick(RewriteLoc.issuepolicy)
                await mouseclick(RewriteLoc.okbtn)
                await t.takeScreenshot(`Policy_Rewrite ${Policynumber}.png`)//screenshot
            })
        })
        
    }
}
export default new CA_rewrite(); 


