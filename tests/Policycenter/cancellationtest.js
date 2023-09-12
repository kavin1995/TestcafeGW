//importing neccessary packages and files from existing files.
import { fixture,Selector} from 'testcafe';
import CancelLoc from '../../Page_Object_Model/CancellationLocators'
import link from '../../utils/.testcaferc.js'
import xlsx from 'node-xlsx';
import { mouseclick ,textbox,dropdown, Policysearch, Login} from '../../utils/helper';
import { getpolicynumber } from '../../utils/helper';
//Reading data from excel.
const excelFile = xlsx.parse("./data/ExcelDataSet.xlsx");
const excelSheet = excelFile.find(sheets => sheets.name == "Cancellation");
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();
const userData = excelSheetData.map((row) => {
const user = {}
row.forEach((data, idx) => user[headers[idx]] = data);
  return user;
});
//Declaring class
class cancel{
  cancellation()
  {
    fixture`Policy Cancellation`//decalring fixture for policy cancellation
        .page(link.url) // Opening Application url 
        
        userData.forEach(user=>{ // Reading test data from each row in excel
          test(`Cancellation has been started for policy Number:`,async t=>{//Declaring test
            await  t.maximizeWindow()//MAximize the window.
            //Login to the application using credentials.
            await Login(user.uname,user.password)
            //Policy  Cancellation Transaction has been initiated.
            const Policynumber = getpolicynumber()
            await Policysearch(CancelLoc.enterpolicynum,Policynumber)
            await  mouseclick(CancelLoc.actionbutton)
            await  mouseclick(CancelLoc.cancelbutton)
            await  dropdown(CancelLoc.source,user.source)
            await  dropdown(CancelLoc.reason,user.reason)
            await  mouseclick(CancelLoc.startcancelbutton)
            await  mouseclick(CancelLoc.bind)
            await  mouseclick(CancelLoc.cancelnowbutton)
            await  mouseclick(CancelLoc.okbutton)
            await  t.takeScreenshot(`Policy_Cancellation ${Policynumber}.png`) //Taking Screenshot after policy is cancelled.
              
          })
      })
  }
}
export default new cancel();


