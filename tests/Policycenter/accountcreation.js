//importing necessary utils and packages 
import { textbox, mouseclick, Login } from '../../utils/helper';
import { fixture,Selector,test} from 'testcafe';
const { setValueToCell } = require('../../utils/helper');
import loc from '../../Page_Object_Model/AccountCreationLocators';
import link from '../../utils/.testcaferc.js';
import xlsx from 'node-xlsx'; 
import { setaccnum } from '../../utils/helper';
const excelFile = xlsx.parse('./data/ExcelDataSet.xlsx');
const excelSheet = excelFile.find(sheets => sheets.name == "AccountCreation");
const excelSheetData = excelSheet.data;
const headers = excelSheetData.shift();
const userData = excelSheetData.map((row) => {
const user = {}
row.forEach((data, idx) => user[headers[idx]] = data);
return user;
});
//Declaring class
class acc
{
    //declaring methods
    acccreation()
    {
        fixture`Personal Account Creation` //Declaring Fixture for Account creation
        .page(link.url); //Application url 
        userData.forEach(user =>{ //retriving test data from excel file.
        test(`Creating personal account for user:'${user.firstname},${user.lastname}'`, async t => {// Test for creating account
            //Login to application
            await Login(user.username,user.password)
            //Creating new Account with mandatory details available in testdata.
            await    mouseclick(loc.clickActionsTab)
            await    mouseclick(loc.clickNewAccountBtn)
            await    mouseclick(loc.clickCompanyName)
            await    textbox(loc.clickCompanyName,user.companyname)
            await    mouseclick(loc.clickSearchButton)
            await    mouseclick(loc.clickCreateNewAccountBtn)
            await    mouseclick(loc.clickPerson)
            await    textbox(loc.typeFirstName,user.firstname)
            await    textbox(loc.typeLastName,user.lastname)
            await    textbox(loc.typeAddress,user.address)
            await    textbox(loc.typeCity,user.city)
            await    mouseclick(loc.clickState)
            await    textbox(loc.clickState,user.state)
            await    mouseclick(loc.typeZipCode)
            await    textbox(loc.typeZipCode,user.zipcode)
            await    mouseclick(loc.clickAdressType)
            await    textbox(loc.clickAdressType,user.addresstype)
            await    mouseclick(loc.clickSearchBtn)
            await    textbox(loc.typeIntoSearch,user.companyname)
            await    mouseclick(loc.clickSearch)
            await    mouseclick(loc.clickSelectBtn)
            await    mouseclick(loc.clickProducerCode)
            await    textbox(loc.clickProducerCode,user.producercode)
            await    mouseclick(loc.clickUpdateBtn)
            await    mouseclick(loc.getAccountNumber)
            //Retriving Account number from the policy center
            const myText =await Selector(loc.getAccountNumber).innerText; 
            const accnumber = myText;                    
            await t.takeScreenshot(`Account Number is ${accnumber}.png`)// Screenshot of the account creation
            console.log("Account Number: "+accnumber);
            //Fetching account number to the excel for further transactions
            const filePath = 'data/ExcelDataSet.xlsx';//Filepath of excel
            const sheetName = 'NewBusiness';//Sheet name
            const rowIndex = 2; // Row index starts from 1
            const columnIndex = 3; // Column index starts from 1
            const value = accnumber; // value to be stored.
            await setValueToCell(filePath, sheetName, rowIndex, columnIndex, value);// Passing policy number to the cell.
            setaccnum(accnumber);
        })
        })
        
        
    }
    

}
export default new acc();





