import { Selector } from 'testcafe';
class PaymentRequest {
    constructor(){
        this.Login_user = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]')
        this.Login_pass = Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]')
        this.Login_submitBtn = Selector('[id="Login:LoginScreen:LoginDV:submit"]')
        this.BC_policy_search = Selector('[id="TabBar:PoliciesTab:PolicyNumberSearchItem-inputEl"]')
        this.BC_Action_Menu = Selector('[id="PolicyGroup:PolicyDetailMenuActions"]')
        this.BC_Policy_Change = Selector('[id="PolicyGroup:PolicyDetailMenuActions:PolicyDetailMenuActions_ChangePolicy-textEl"]')
        this.BC_Effective_date = Selector('[id="PolicyChangeWizard:PolicyChangeWizardBasicsStepScreen:ChangePolicyBasicsDV:PolicyChangeDate-inputEl"]')
        this.BC_next = Selector('[id="PolicyChangeWizard:Next"]')
        this.BC_Finish = Selector('[id="PolicyChangeWizard:Finish"]')
    }
}
export default new PaymentRequest();