import { Selector } from 'testcafe';

class ReinstateLoc {

    constructor() {

        this.userName = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]');

        this.passWord=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]');

        this.clickSubmitBtn =Selector('[id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]');

        this.clickPolicynumField = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');

        this.enterpolicynum = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');

        this.actionbutton = Selector('[id="PolicyFile:PolicyFileMenuActions-btnEl"]');

        this.clicksearchBar = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem_Button"]');

        this.clickreinstate = Selector('[id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_ReinstatePolicy-itemEl"]');

        this.clickreason = Selector('[id="ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:ReinstatePolicyDV:ReasonCode-inputEl"]');

        this.clickquote = Selector('[id="ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl"]');

        this.clickReinstateBtn = Selector('[id="ReinstatementWizard:ReinstatementWizard_QuoteScreen:JobWizardToolbarButtonSet:Reinstate-btnInnerEl"]');

        this.clickOK = Selector('[id="button-1005-btnEl"]')

        this.savedraft = Selector('[id="ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:JobWizardToolbarButtonSet:Draft-btnInnerEl"]')

        this.quote =Selector('[id="ReinstatementWizard:ReinstatementWizard_ReinstatePolicyScreen:JobWizardToolbarButtonSet:QuoteOrReview"]')
    
        this.reinstate = Selector('[id="ReinstatementWizard:ReinstatementWizard_QuoteScreen:JobWizardToolbarButtonSet:Reinstate"]')
    }

}

export default new ReinstateLoc();