//Importing neccessary packages and files
import ReinstateLoc from '../../Page_Object_Model/ReinstateLocators'
import { textbox, mouseclick,dropdown, Policysearch, Login} from '../../utils/helper';
import link from '../../utils/.testcaferc.js'
import xlsx from 'node-xlsx';
import { getpolicynumber } from '../../utils/helper';
//Reading testdata from the excel file
const excelFile = xlsx.parse("./data/ExcelDataSet.xlsx");
const excelSheet = excelFile.find(sheets => sheets.name == "Reinstate");
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();
const userData = excelSheetData.map((row) => {
  const user = {}
  row.forEach((data, idx) => user[headers[idx]] = data);
  return user;
});
//Declared class
class reinstate{
    reinstatepolicy()
    {
        fixture`Reinsate Policy After Cancellation`//Declared Fixture 
        .page(link.url) //Web-Application url
        
        userData.forEach(user=>{
            test(`Reinstate Policy`, async t => {   //Declared test         
                await t.maximizeWindow()//maximize the window.
                //Login to the application.
                await Login(user.uname,user.password)
                //Reinstate transaction has been started
                const Policynumber = getpolicynumber();
                await Policysearch(ReinstateLoc.clickPolicynumField,Policynumber)
                await mouseclick(ReinstateLoc.actionbutton)
                await mouseclick(ReinstateLoc.clickreinstate)
                await dropdown(ReinstateLoc.clickreason,user.reason)
                await mouseclick(ReinstateLoc.quote)
                await mouseclick(ReinstateLoc.reinstate)
                await mouseclick(ReinstateLoc.clickOK)
                await t.takeScreenshot(`Policy_Reinstated ${Policynumber}.png`)//screenshot
            })
        })
        
    }
}
export default new reinstate(); 


