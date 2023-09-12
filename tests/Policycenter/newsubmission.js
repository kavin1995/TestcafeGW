import { fixture,Selector} from 'testcafe';
import Loc from '../../Page_Object_Model/LoginLocators'
import nbloc from '../../Page_Object_Model/NewbusinessLocators'
import {dropdown,Login,mouseclick,textbox} from'../../utils/helper'
import xlsx from 'node-xlsx';
import link from '../../utils/.testcaferc.js'
import { getaccnum } from '../../utils/helper';
import { setpolicynumber } from '../../utils/helper';
const { setValueToCell } = require('../../utils/helper');
const excelFile = xlsx.parse("./data/ExcelDataSet.xlsx");
const excelSheet = excelFile.find(sheets => sheets.name == "NewBusiness");
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();
const userData = excelSheetData.map((row) => {
const user = {}
row.forEach((data, idx) => user[headers[idx]] = data);
return user;
});
var myText,polnum;
class basepage{
    NewBusiness(){
    fixture`New Business Submission`
    .page (link.url);
            userData.forEach(user=>{
                
                test(`Creating new submission for account:`, async t => {                    
                await t.maximizeWindow()
                await     Login(user.uname,user.password)
                await     t.pressKey('alt+P');
                await     mouseclick(Loc.newsubmissionbutton);
                const     AccountNumber = getaccnum();
                await     textbox(Loc.accountnum,AccountNumber);
                await     dropdown(Loc.searchorganisation,user.orgname);
                await     dropdown(Loc.orgname,user.orgname);
                await     mouseclick(Loc.selectbutton);
                await     dropdown(Loc.producercode,user.prodcode);
                await     t.scrollIntoView(nbloc.lobbutton)
                await     mouseclick(nbloc.lobbutton)
                await     dropdown(nbloc.offerbutton,String(user.offerprogram));
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     textbox(nbloc.effectivedate,user.effdate)
                await     dropdown(nbloc.term,user.termtype)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.adddriverbutton)
                await     mouseclick(nbloc.newdriverbutton)
                await     dropdown(nbloc.selectnoofaccident,String(user.accident))
                await     dropdown(nbloc.selectnoofviolation,String(user.violation))
                await     dropdown(nbloc.licensedyear,String(user.yearoflicense))
                await     dropdown(nbloc.firstnamedriverpage,user.fname)
                await     dropdown(nbloc.lastnamedriverpage,user.lname)
                await     mouseclick(nbloc.dateofbirthdriverpage)
                await     textbox(nbloc.dateofbirthdriverpage,String(user.dob))
                await     dropdown(nbloc.Address1driverpage,user.streetname)
                await     dropdown(nbloc.citydriverpage,user.city)
                await     dropdown(nbloc.statedriverpage,user.state)
                await     dropdown(nbloc.zipcodedriverpage,String(user.zipcode))
                await     dropdown(nbloc.addresstypedriverpage,user.addresstype)
                await     dropdown(nbloc.licensenumberdriverpage,String(user.licenseno))
                await     dropdown(nbloc.licensestatedriverpage,user.licensestate)
                await     mouseclick(nbloc.okbuttondriverpage)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.vehiclebutton)
                await     textbox(nbloc.vehiclenumber,String(user.vehnum))
                await     mouseclick(nbloc.costnewbutton)
                await     textbox(nbloc.costnewbutton,String(user.costnew))
                await     dropdown(nbloc.licensestatevehiclepage,user.vehstate)
                await     mouseclick(nbloc.adddriverbuttonvehiclepage)
                await     mouseclick(nbloc.driverselection)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.medicallimitcheck)
                await     mouseclick(nbloc.coveragebutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.nextbutton)
                await     mouseclick(nbloc.quotebutton)
                await     mouseclick(nbloc.bindbutton)
                await     mouseclick(nbloc.issuebutton)
                await     mouseclick(nbloc.issueokbutton)
                await     mouseclick(nbloc.policynumclick)
                myText =await Selector(nbloc.getpolicynumber).innerText;// fetching policy number in policy cneter when it created.
                polnum =  myText                    
                await t.takeScreenshot(`Personal New Business Policy ${polnum} is Created.png`)//Screenshot
                const filePath = 'data/ExcelDataSet.xlsx'; // Path of the excel.
                const sheetName = 'Cancellation';// Sheetname
                const rowIndex = 2; // Row index starts from 1
                const columnIndex = 3; // Column index starts from 1
                const value = polnum; // Policy number value
                await setValueToCell(filePath, sheetName, rowIndex, columnIndex, value);// Passing policy number to the cell 
                await setValueToCell(filePath, 'Renew', rowIndex, columnIndex, value); // Passing policy number to the cell
                await setValueToCell(filePath, 'Reinstate', rowIndex, columnIndex, value);// Passing policy number to the cell
                setpolicynumber(polnum)

                })
            })
            
        }
    }
 
//module.exports=basepage;
export default new basepage();


