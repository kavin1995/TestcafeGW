import { Selector } from 'testcafe';
class LoginLoc {
    constructor(){
        this.username = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]');
        this.password=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]');
        this.loginbutton=Selector('[id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]');
        this.clickActionsTab=Selector('[id="Desktop:DesktopMenuActions-btnEl"]');
        //this.newsubbutton=Selector('[id="Desktop:DesktopMenuActions:DesktopMenuActions_Create:DesktopMenuActions_NewSubmission-textEl"]')
        this.newsubmissionbutton=Selector('[id="TabBar:PolicyTab:PolicyTab_NewSubmission-textEl"]')
        this.searchorganisation=Selector('[id="NewSubmission:NewSubmissionScreen:SelectAccountAndProducerDV:ProducerSelectionInputSet:Producer-inputEl"]');
        this.orgname=Selector('[id="OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:GlobalContactNameInputSet:Name-inputEl"]');
        this.selectbutton=Selector('[id="OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchResultsLV:0:_Select"]');
        this.producercode=Selector('[id="NewSubmission:NewSubmissionScreen:SelectAccountAndProducerDV:ProducerSelectionInputSet:ProducerCode-inputEl"]');
        this.accountnum=Selector('[id="NewSubmission:NewSubmissionScreen:SelectAccountAndProducerDV:Account-inputEl"]')
    
    }
}
export default new LoginLoc(); 