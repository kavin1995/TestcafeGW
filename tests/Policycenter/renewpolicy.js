//importing classes and packages 
import RenewLoc from '../../Page_Object_Model/RenewLocators'
import { textbox, mouseclick, Policysearch, Login } from '../../utils/helper';
import link from '../../utils/.testcaferc.js'
import xlsx from 'node-xlsx';
import { getpolicynumber } from '../../utils/helper';
//reading excelfile
const excelFile = xlsx.parse('./data/ExcelDataSet.xlsx');
const excelSheet = excelFile.find(sheets => sheets.name == "Renew");
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();
const userData = excelSheetData.map((row) => {
const user = {}
row.forEach((data, idx) => user[headers[idx]] = data);
return user;
});
//declare class 
class renew{
    renewpolicy()
    {
        fixture`Renewing Policy`//declare fixture
        .page(link.url)// web-application url
        
        userData.forEach(user=>{// retriveing testdata from eachrow in excel.
            test(`Renew Policy for`, async t => { //declare test
                await t.maximizeWindow()//maximize the window
                //Login to the application.
                await Login(user.uname,user.password)
                //Policy renewal has been initiated.
                const Policynumber = getpolicynumber()
                await Policysearch(RenewLoc.clickPolicynumField,Policynumber)
                await mouseclick(RenewLoc.actionbutton)
                await mouseclick(RenewLoc.clickrenew)
                await mouseclick(RenewLoc.clickOK)
                await mouseclick(RenewLoc.clicknext)
                await mouseclick(RenewLoc.clickedit)
                await mouseclick(RenewLoc.clicknext)
                await mouseclick(RenewLoc.clicktermtype)
                await textbox(RenewLoc.clicktermtype,user.termtype)
                await t.pressKey('enter')
                await mouseclick(RenewLoc.clickquote)
                await mouseclick(RenewLoc.clickbindoptions)
                await mouseclick(RenewLoc.renewal)
                await mouseclick(RenewLoc.clickOK)
                await t.takeScreenshot(`Policy_Renewed ${Policynumber}.png`)//Screenshot
            })
            })
        
    }
}
export default new renew()
