import { Selector } from 'testcafe';

class RewriteLoc {

    constructor() {

        this.userName = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]');

        this.passWord=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]');

        this.clickSubmitBtn =Selector('[id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]');

        this.clickPolicynumField = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');

        this.enterpolicynum = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]');

        this.actionbutton = Selector('[id="PolicyFile:PolicyFileMenuActions-btnEl"]');

        this.clicksearchBar = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem_Button"]');

        this.rewrite = Selector('[id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:StartRewriteMenuItemSet:RewriteFullTerm-textEl"]')

        this.quote = Selector('[id="RewriteWizard:OfferingScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl"]')
        this.issuepolicy = Selector('[id="RewriteWizard:RewriteWizard_QuoteScreen:JobWizardToolbarButtonSet:BindRewrite-btnInnerEl"]')
        this.okbtn = Selector('[id="button-1005-btnEl"]')
    
    
    
    }

}

export default new RewriteLoc();