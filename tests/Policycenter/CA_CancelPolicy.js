//importing neccessary packages and files from existing files.
import { fixture,Selector} from 'testcafe';
import CancelLoc from '../../Page_Object_Model/CancellationLocators'
import link from '../../utils/.testcaferc.js'
import Data from '../../data/CA_Cancel.json'
import { mouseclick ,textbox,dropdown, Policysearch,Login, CA_getpolicynumber } from '../../utils/helper';

//Reading data from excel.
//Declaring class
class CA_cancel{
  CA_cancellation()
  {
    fixture`Commercial auto Policy Cancellation`//decalring fixture for policy cancellation
        .page(link.url) // Opening Application url 
        
        Data.forEach(user=>{ // Reading test data from each row in excel
          test(`Cancellation has been started for policy Number:`,async t=>{//Declaring test
            await  t.maximizeWindow()//MAximize the window.
            //Login to the application using credentials.
            await Login(user.Login_username,user.Login_password)
            //Policy  Cancellation Transaction has been initiated.
            const Policynumber = CA_getpolicynumber()
            await Policysearch(CancelLoc.enterpolicynum,Policynumber)
            await  mouseclick(CancelLoc.actionbutton)
            await  mouseclick(CancelLoc.cancelbutton)
            await  dropdown(CancelLoc.source,user.Source)
            await  dropdown(CancelLoc.reason,user.Reason)
            await  mouseclick(CancelLoc.startcancelbutton)
            await  mouseclick(CancelLoc.bind)
            await  mouseclick(CancelLoc.cancelnowbutton)
            await  mouseclick(CancelLoc.okbutton)
            await  t.takeScreenshot(`Policy_Cancellation ${Policynumber}.png`) //Taking Screenshot after policy is cancelled.
              
          })
      })
  }
}
export default new CA_cancel();


