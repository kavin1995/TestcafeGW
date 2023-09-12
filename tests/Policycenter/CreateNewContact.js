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

class CreateContact{
    createcontact()
    {
        fixture`Create Contact`//declare fixture
        .page(link.url)// web-application url
        
        userData.forEach(user=>{// retriveing testdata from eachrow in excel.
            test(`Create contact for`, async t => { //declare test
                await t.maximizeWindow()//maximize the window
                //Login to the application.
                await Login(user.uname,user.password)
                await doubleclick(ContactLoc.ContactIcon)
                await t.pressKey('down')
                
                await mouseclick(ContactLoc.NewContact)
                await mouseclick(ContactLoc.Newperson)
                await textbox(ContactLoc.FirstName,user.firstname)
                await textbox(ContactLoc.LastName,user.lastname)
               // await textbox(ContactLoc.Address,user.address)
                await textbox(ContactLoc.City,user.city)
                await textbox(ContactLoc.Address,user.address)
                await dropdown(ContactLoc.clickstateoption,user.state)
                await textbox(ContactLoc.clickZipCode,user.zipcode)
                await dropdown(ContactLoc.clickaddresstype,user.addresstype)
                await mouseclick(ContactLoc.clickUpdate)
                
                
                await t.expect((ContactLoc.NameCreated).innerText).eql(user.firstname+" "+user.lastname)
                await t.takeScreenshot(`Contact Created ${user.firstname+""+user.lastname}.png`)//Screenshot
                await mouseclick(ContactLoc.clickaction)
                await mouseclick(ContactLoc.clicknewaccount)
                await mouseclick(ContactLoc.Search)
                await textbox(ContactLoc.Organisation,user.organisation)
                await mouseclick(ContactLoc.Search1)
                await mouseclick(ContactLoc.Select)
                await dropdown(ContactLoc.ProducerCode,user.producercode)
                await mouseclick(ContactLoc.update)
                const Text =await Selector(ContactLoc.AccountVerify).innerText; 
                const AccCreated = Text; 
                await t.takeScreenshot(`Account Created ${AccCreated}.png`)//Screenshot
            })
            })
        
    }
}
export default new CreateContact()
