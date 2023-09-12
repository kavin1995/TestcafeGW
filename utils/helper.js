import { t } from 'testcafe';
const Excel = require('exceljs');
import tc from '../Page_Object_Model/LoginLocators'

let accnum2;
let PolicyNumber;

export function setaccnum(accno) {
    accnum2 = accno;
}
export function getaccnum() {
    return accnum2;
}
export function setpolicynumber(Polnum) {
    PolicyNumber = Polnum;
}
export function getpolicynumber() {
    return PolicyNumber;
}
export function CA_setpolicynumber(Polnum) {
    PolicyNumber = Polnum;
}
export function CA_getpolicynumber() {
    return PolicyNumber;
}

export async function textbox(textloc, value) {
    await t.typeText(textloc, value)
};
export async function mouseclick(clickloc) {
    await t.click(clickloc)
};
export async function dropdown(loc, value) {
    await t
        .click(loc)
        .pressKey('backspace')
        .typeText(loc, value)
        .pressKey('enter')
};

export async function Policysearch(loc, policynumber) {
    await t
        .pressKey('alt+P')
        .click(loc)
        .typeText(loc, policynumber)
        .pressKey('enter')
}
export async function Login(user, pwd) {
    await t.typeText(tc.username, user)
    await t.typeText(tc.password, pwd)
    await t.click(tc.loginbutton)
}

export async function setValueToCell(filePath, sheetName, rowIndex, columnIndex, value) {
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);
    const cell = worksheet.getCell(rowIndex, columnIndex);
    cell.value = value;
    await workbook.xlsx.writeFile(filePath);
}







