import { Selector } from 'testcafe';
class CancelLoc {
    constructor(){
        this.username=Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]')
        this.password=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]')
        this.loginbutton=Selector('[id="Login:LoginScreen:LoginDV:submit"]')
        this.enterpolicynum=Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');
        this.actionbutton = Selector ('[id="PolicyFile:PolicyFileMenuActions-btnEl"]');
        this.cancelbutton=Selector('[id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_CancelPolicy-textEl"]')
        this.source=Selector('[id="StartCancellation:StartCancellationScreen:CancelPolicyDV:Source-inputEl"]');
        this.reason=Selector('[id="StartCancellation:StartCancellationScreen:CancelPolicyDV:Reason-inputEl"]');
        this.startcancelbutton=Selector('[id="StartCancellation:StartCancellationScreen:NewCancellation-btnInnerEl"]');
        this.bind=Selector('[id="CancellationWizard:CancellationWizard_QuoteScreen:JobWizardToolbarButtonSet:BindOptions-btnInnerEl"]')
        this.cancelnowbutton=Selector('[id="CancellationWizard:CancellationWizard_QuoteScreen:JobWizardToolbarButtonSet:BindOptions:CancelNow-textEl"]');
        this.okbutton=Selector('[id="button-1005-btnInnerEl"]')
    
    }
}
export default new CancelLoc(); 