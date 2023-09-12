//importing classes and packages 
import ContactLoc from '../../Page_Object_Model/CreateNewContact'
import { textbox, mouseclick, Login ,dropdown, doubleclick} from '../../utils/helper';
import link from '../../utils/.testcaferc.js'
import xlsx from 'node-xlsx';
import { Selector } from 'testcafe';

//reading excelfile
const excelFile = xlsx.parse('./data/ExcelDataSet.xlsx');
const excelSheet = excelFile.find(sheets => sheets.name == "CreateContact");
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();
const userData = excelSheetData.map((row) => {
const user = {}
row.forEach((data, idx) => user[headers[idx]] = data);
return user;
});
//declare class 
 

class SearchAccount{
    searchaccount()
    {
        fixture`Create Contact`//declare fixture
        .page(link.url)// web-application url
        
        userData.forEach(user=>{// retriveing testdata from eachrow in excel.
            test(`Search Account`, async t => { //declare test
                await t.maximizeWindow()//maximize the window
                //Login to the application.
                await Login(user.uname,user.password)
                await doubleclick(ContactLoc.SearchTab)
                await t.pressKey('down')
                
                await mouseclick(ContactLoc.SearchAccount)
                
                await textbox(ContactLoc.SearchFirstname,user.firstname)
                await textbox(ContactLoc.SearchLastname,user.lastname)
                
                await mouseclick(ContactLoc.SearchButton)
                
               // await t.expect((ContactLoc.SearchText).innerText).eql(user.firstname+" "+user.lastname)
                await t.takeScreenshot(`Search Successfull ${user.firstname+" "+user.lastname}.png`)//Screenshot
                
            })
            })
        
    }
}
export default new SearchAccount()
