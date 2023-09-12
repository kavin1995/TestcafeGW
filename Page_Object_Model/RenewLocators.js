import { Selector } from 'testcafe';
class RenewLoc {
    constructor() {
        this.userName = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]');

        this.passWord=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]');

        this.clickSubmitBtn =Selector('[id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]');

        this.clickPolicynumField = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');

        this.enterpolicynum = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');

        this.actionbutton = Selector('[id="PolicyFile:PolicyFileMenuActions-btnEl"]');

        this.clicksearchBar = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem_Button"]');

        this.clickrenew = Selector('[id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_RenewPolicy-itemEl"]')

        this.clickOK = Selector('[id="button-1005-btnInnerEl"]')

        this.clicknext = Selector('[id="RenewalWizard:Next-btnInnerEl"]')

        this.clickedit = Selector('[id="RenewalWizard:LOBWizardStepGroup:RenewalWizard_PolicyInfoScreen:JobWizardToolbarButtonSet:EditPolicyWorkflow-btnInnerEl"]')

        this.clicktermtype = Selector('[id="RenewalWizard:LOBWizardStepGroup:RenewalWizard_PolicyInfoScreen:RenewalWizard_PolicyInfoDV:PolicyInfoInputSet:TermType-inputEl"]')

        this.clickquote = Selector('[id="RenewalWizard:LOBWizardStepGroup:RenewalWizard_PolicyInfoScreen:JobWizardToolbarButtonSet:RenewalQuote-btnInnerEl"]')
        this.clickbindoptions = Selector('[id="RenewalWizard:PostQuoteWizardStepSet:RenewalWizard_QuoteScreen:JobWizardToolbarButtonSet:BindOptions"]')
        this.savedraft = Selector('[id="ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:JobWizardToolbarButtonSet:Draft-btnInnerEl"]')
        this.renewal = Selector('[id="RenewalWizard:PostQuoteWizardStepSet:RenewalWizard_QuoteScreen:JobWizardToolbarButtonSet:BindOptions:IssueNow-textEl"]')
    }}
export default new RenewLoc();