import { Selector } from "testcafe";
class Bclocator{
    constructor(){
        this.Login_user = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]')
        this.Login_pass = Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]')
        this.Login_submitBtn = Selector('[id="Login:LoginScreen:LoginDV:submit"]')
        this.BC_policy_search = Selector('[id="TabBar:PoliciesTab:PolicyNumberSearchItem-inputEl"]')
        this.BC_Policy_Details = Selector('[id="PolicyGroup:MenuLinks:PolicyGroup_PolicyOverview:PolicyOverview_PolicyDetailSummary"]')
        this.BC_Policy_Number = Selector('[id="PolicyDetailSummary:PolicyDetailSummaryScreen:PolicyDetailDV:PolicyNumber-bodyEl"]')
        this.BC_effectivedate = Selector('[id="PolicyDetailSummary:PolicyDetailSummaryScreen:PolicyDetailDV:PolicyPerEffDate-inputEl"]')
        this.BC_expirationdate = Selector('[id="PolicyDetailSummary:PolicyDetailSummaryScreen:PolicyDetailDV:PolicyPerExpirDate-inputEl"]')
        this.BC_accountnumber = Selector('[id="PolicyDetailSummary:PolicyDetailSummaryScreen:PolicyDetailDV:AccountNumber-inputEl"]')
        this.BC_accountname = Selector('[id="PolicyDetailSummary:PolicyDetailSummaryScreen:PolicyDetailDV:AccountName-inputEl"]')
        this.BC_transactions = Selector('[id="PolicyGroup:MenuLinks:PolicyGroup_PolicyDetailTransactions"]')
        this.BC_PaymentSchedule = Selector('[id="PolicyGroup:MenuLinks:PolicyGroup_PolicyDetailPayments"]')
        this.BC_Paymenthistory = Selector('[id="PolicyDetailPayments:PolicyDetailPaymentsScreen:ActualPaymentsCardTab"]')
        this.BC_History = Selector('[id="PolicyGroup:MenuLinks:PolicyGroup_PolicyDetailHistory"]')
    
    
    
    }
}
export default new Bclocator();