import { Selector } from "testcafe";

class policychange{
    constructor(){
        this.username = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]')
        this.password = Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]')
        this.submitbtn = Selector("span").withAttribute("id", "Login:LoginScreen:LoginDV:submit-btnInnerEl")
        this.policyretriveinput =Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]')
        this.policysearchbutton = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem_Button"]')
        this.actionbutton = Selector ('[id="PolicyFile:PolicyFileMenuActions-btnEl"]'),
        this.clickpolicychange = Selector ('[id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_ChangePolicy-itemEl"]')
        this.effectivedatepolicychange = Selector('[id="StartPolicyChange:StartPolicyChangeScreen:StartPolicyChangeDV:EffectiveDate_date-inputWrap"]')
        this.nextbuttonpolicychange = Selector('[id="StartPolicyChange:StartPolicyChangeScreen:NewPolicyChange-btnInnerEl"]') 
        this.discription = Selector ('[id="StartPolicyChange:StartPolicyChangeScreen:StartPolicyChangeDV:Description-inputEl"]')
        this.changenextbutton = Selector ('[id="PolicyChangeWizard:Next"]')
        this.changeofferbutton = Selector('[id="PolicyChangeWizard:OfferingScreen:OfferingSelection-inputEl"]')
        this.policychangequotebtn =Selector ('[id="PolicyChangeWizard:PolicyChangeWizard_DifferencesScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl"]')
        this.clickPAcoverage = Selector ('[id="PolicyChangeWizard:LOBWizardStepGroup:PALine"]')
        this.clickmedicalpayment = Selector('[id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PersonalAuto_AllVehicleCoveragesDV:PALiabCategoryIterator:1:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:OptionTermInput-inputEl"]')
        this.issuepolicybtn = Selector('[id="PolicyChangeWizard:PolicyChangeWizard_QuoteScreen:JobWizardToolbarButtonSet:BindPolicyChange"]')
        this.clickokbtn = Selector('[id="button-1005"]')
    }
}
export default new policychange();