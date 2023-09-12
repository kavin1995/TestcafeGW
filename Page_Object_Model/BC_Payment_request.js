import { Selector } from 'testcafe';
class PaymentRequest {
    constructor(){
        this.Login_user = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]')
        this.Login_pass = Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]')
        this.Login_submitBtn = Selector('[id="Login:LoginScreen:LoginDV:submit"]')
        this.Accountsearch = Selector('[id="TabBar:AccountsTab:AccountNumberSearchItem-inputEl"]')
        this.ActionButton = Selector('[id="AccountGroup:AccountDetailMenuActions"]')
        this.NewPayment = Selector('[id="AccountGroup:AccountDetailMenuActions:AccountDetailMenuActions_Payments"]')
        this.PaymentRequest = Selector('[id="AccountGroup:AccountDetailMenuActions:AccountDetailMenuActions_Payments:AccountDetailMenuActions_NewPaymentRequest-itemEl"]')
        this.Amount = Selector('[id="AccountDetailNewPaymentRequestWizard:NewPaymentRequestScreen:PaymentRequestDV:amount-inputEl"]')
        this.new =Selector('[id="AccountDetailNewPaymentRequestWizard:NewPaymentRequestScreen:PaymentRequestDV:PaymentInstrument:CreateNewPaymentInstrument"]')
        this.newpaymentmethod = Selector('[id="NewPaymentInstrumentPopup:PaymentMethod-inputEl"]')
        this.okbutton = Selector('[id="NewPaymentInstrumentPopup:Update"]')
        this.nextbutton = Selector('[id="AccountDetailNewPaymentRequestWizard:Next"]')
        this.finish = Selector('[id="AccountDetailNewPaymentRequestWizard:Finish"]')
        this.payments = Selector('[id="AccountGroup:MenuLinks:AccountGroup_AccountDetailPayments"]')
        this.paymentrequestreview= Selector('[id="AccountGroup:MenuLinks:AccountGroup_AccountDetailPayments:AccountDetailPayments_AccountPaymentRequests"]')
        this.requestlist = Selector('[id="AccountPaymentRequests:AccountDetailPaymentsScreen:RequestsListLV-body"]')
        this.Directbill = Selector('[id="AccountGroup:AccountDetailMenuActions:AccountDetailMenuActions_Payments:AccountDetailMenuActions_NewDirectBillPayment-itemEl"]')
        this.directbillamount = Selector('[id="NewDirectBillPayment:EditDBPaymentScreen:PaymentDetailsDV:Amount-inputEl"]')
        this.db_execute = Selector ('[id="NewDirectBillPayment:EditDBPaymentScreen:Update"]')
    }
}
export default new PaymentRequest();