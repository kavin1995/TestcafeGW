import { Selector } from 'testcafe';
class ContactLoc {
    constructor() {
        this.userName = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]');

        this.passWord=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]');

       // this.ContactIcon=Selector('[id="TabBar:ContactTab:NewContact-itemEl"]');
        this.NewContact=Selector('[id="TabBar:ContactTab:NewContact-textEl"]');
        this.ContactIcon=Selector('[id= "TabBar:ContactTab-btnEl"]')

        this.FirstName =Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:ContactNameInputSet:GlobalPersonNameInputSet:FirstName-inputEl"]');

        this.LastName = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:ContactNameInputSet:GlobalPersonNameInputSet:LastName-inputEl"]');

        this.Address = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:AddressLine1-inputEl"]');

        this.City = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:City-inputEl"]');

        this.clickstateoption = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:State-inputEl"]');

        this.clickaddresstype = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:AddressType-inputEl"]')
        this.clickZipCode = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:AddressInputSet:globalAddressContainer:GlobalAddressInputSet:PostalCode-inputEl"]')
        this.clickUpdate = Selector('[id="NewContact:Update-btnInnerEl"]')

        this.Newperson = Selector('[id="TabBar:ContactTab:NewContact:NewPerson-textEl"]')

        this.NewCompany = Selector('[id="TabBar:ContactTab:NewContact:NewCompany-textEl"]')
        this.Companyname = Selector('[id="NewContact:ContactPanelSet:ContactCV:ContactDV:ContactNameInputSet:GlobalContactNameInputSet:Name-inputEl"]')
        this.NameCreated = Selector('[id="ContactFile:ContactFileInfoBar:ContactName-btnInnerEl"]')

        this.clickaction = Selector('[id="ContactFile:ContactFileMenuActions-btnInnerEl"]')
        this.clicknewaccount = Selector('[id="ContactFile:ContactFileMenuActions:ContactFileMenuActions_Create:ContactFileMenuActions_NewAccount-textEl"]')
        this.Search = Selector('[id="CreateAccountForContact:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:Producer:SelectOrganization"]')
        this.Organisation = Selector('[id="OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:GlobalContactNameInputSet:Name-inputEl"]')
        this.Search1 = Selector('[id="OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]')
        this.Select = Selector('[id="OrganizationSearchPopup:OrganizationSearchPopupScreen:OrganizationSearchResultsLV:0:_Select"]')
        this.ProducerCode = Selector('[id="CreateAccountForContact:CreateAccountScreen:CreateAccountDV:ProducerSelectionInputSet:ProducerCode-inputEl"]')
        this.update = Selector('[id="CreateAccountForContact:CreateAccountScreen:Update-btnInnerEl"]')
        this.AccountVerify = Selector('[id="AccountFile:AccountFileInfoBar:Account-btnInnerEl"]')
        this.SearchTab = Selector('[id="TabBar:SearchTab-btnInnerEl"]')
        this.SearchAccount = Selector('[id="TabBar:SearchTab:Search_AccountSearch-textEl"]')
        this.SearchFirstname = Selector('[id="AccountSearch:AccountSearchScreen:AccountSearchDV:GlobalPersonNameInputSet:FirstName-inputEl"]')
        this.SearchLastname = Selector('[id="AccountSearch:AccountSearchScreen:AccountSearchDV:GlobalPersonNameInputSet:LastName-inputEl"]')
        this.SearchButton = Selector('[id="AccountSearch:AccountSearchScreen:AccountSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]')
        this.SearchText = Selector("td").withAttribute("data-columnid","gridcolumn-3695")
        
    }}
export default new ContactLoc();