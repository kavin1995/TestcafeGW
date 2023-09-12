import { fixture,Selector} from 'testcafe';
import Loc from '../../Page_Object_Model/LoginLocators'
import nbloc from '../../Page_Object_Model/NewbusinessLocators'
import calob from '../../Page_Object_Model/CA_LOB'
import {dropdown,mouseclick,textbox, CA_setpolicynumber, Login} from'../../utils/helper'
import link from '../../utils/.testcaferc.js'
import { getaccnum } from '../../utils/helper';
import Data from '../../data/PC_CA_DAta.json'
const { setValueToCell } = require('../../utils/helper');

var myText,polnum;
class CA_Newbusiness{
    CA_NewBusiness(){
    fixture`New Business Submission using commercial auto`
    .page (link.url);
            Data.forEach(data=>{                
                test(`Creating new submission for account using Commercial auto LOB:`, async t => {                    
                await     t.maximizeWindow()
                await     Login(data.Login_username,data.Login_password)
                await     t.pressKey('alt+P');
                await     mouseclick(Loc.newsubmissionbutton);
                const     AccountNumber = getaccnum();
                await     textbox(Loc.accountnum,AccountNumber);
                await     dropdown(Loc.searchorganisation,data.orgname);
                await     dropdown(Loc.orgname,data.orgname);
                await     mouseclick(Loc.selectbutton);
                await     dropdown(Loc.producercode,data.prodcode);
                await     t.scrollIntoView(calob.lobbutton)
                await     mouseclick(calob.lobbutton)
                await     dropdown(nbloc.offerbutton,data.Offerselection);
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     textbox(nbloc.effectivedate,data.DateQuoted)
                await     dropdown(calob.orgtype, data.orgtype)
                await     mouseclick(nbloc.nextbutton)
                await     dropdown(calob.product,data.product)
                await     dropdown(calob.fleet,data.fleet)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(calob.createvehicle)
                await     dropdown(calob.gargedat,data.gargedat)
                await     dropdown(calob.vehicletype,data.Vehicletype)
                await     textbox(calob.vin,data.vin)
                await     dropdown(calob.Cost,data.cost)
                await     mouseclick(calob.classsearch)
                await     mouseclick(calob.clicksearch)
                await     mouseclick(calob.selectbtn)
                await     mouseclick(calob.okbtn)
                await     mouseclick(calob.backbtn)
                await     mouseclick(calob.backbtn)
                await     dropdown(calob.liablity,data.Liabilitylimit)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(calob.paneldown)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(calob.adddriver)
                await     textbox(calob.driverfirstname,data.firstname)
                await     textbox(calob.driverlastname,data.lastname)
                await     textbox(calob.driverdob,data.DOB)
                await     textbox(calob.driverlicno,data.Lic_no)
                await     dropdown(calob.driverlicstate,data.Lic_state)
                await     mouseclick(calob.driverok)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.quotebutton)
                await     mouseclick(nbloc.bindbutton)
                await     mouseclick(nbloc.issuebutton)
                await     mouseclick(nbloc.issueokbutton)
                await     mouseclick(nbloc.policynumclick)
                myText =  await Selector(nbloc.getpolicynumber).innerText;// fetching policy number in policy cneter when it created.
                polnum =  myText
                console.log(polnum)
                await t.takeScreenshot(`Commercial auto new Business Policy ${polnum} is Created.png`)//Screenshot
                CA_setpolicynumber(polnum)

                })
            })
            
        }
    }
 
//module.exports=basepage;
export default new CA_Newbusiness();


