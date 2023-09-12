import { Selector } from 'testcafe';
class CA_LOB {
    constructor(){
        this.username = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]');
        this.password=Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]');
        this.loginbutton=Selector('[id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]');
        this.lobbutton=Selector('[id="NewSubmission:NewSubmissionScreen:ProductOffersDV:ProductSelectionLV:0:addSubmission"]')
        this.orgtype = Selector('[id="SubmissionWizard:LOBWizardStepGroup:SubmissionWizard_PolicyInfoScreen:SubmissionWizard_PolicyInfoDV:AccountInfoInputSet:OrganizationType-inputEl"]')
        this.product = Selector('[id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:BALineDV:PolicyType-inputEl"]')
        this.fleet = Selector('[id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:BALineDV:Fleet-inputEl"]')
        this.createvehicle = Selector('[id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BAVehiclesScreen:BAVehiclesLV_tb:Add"]')
        this.gargedat = Selector('[id="BAVehiclePopup:VehicleScreen:BAVehicleCV:BAGarageLocationInputSet:BAGarageLocationInput-inputEl"]')
        this.vehicletype = Selector('[id="BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Type-inputEl"]')
        this.vin = Selector('[id="BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Vin-inputEl"]')
        this.Cost = Selector('[id="BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:Cost-inputEl"]')
        this.classsearch = Selector('[id="BAVehiclePopup:VehicleScreen:BAVehicleCV:VehicleDV:ClassCode:SelectClassCode"]'),
        this.clicksearch = Selector('[id="VehicleClassCodeSearchPopup:VehicleClassCodeSearchScreen:VehicleClassCodeSearchDV:SearchAndResetInputSet:SearchLinksInputSet:Search"]')
        this.selectbtn = Selector('[id="VehicleClassCodeSearchPopup:VehicleClassCodeSearchScreen:VehicleClassCodeSearchResultsLV:0:_Select"]')
        this.okbtn = Selector('[id="BAVehiclePopup:VehicleScreen:Update-btnInnerEl"]')
        this.backbtn = Selector('[id="SubmissionWizard:Prev-btnInnerEl"]')
        this.liablity = Selector('[id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:baLineLiabCatIterator:0:BALiabGroupInputSet:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:PackageTermInput-inputEl"]')
        this.adddriver = Selector('[id="SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:BADriversScreen:BADriversScreenToolbar:AddDriverDirectly-btnInnerEl"]')
        this.driverfirstname = Selector('[id="BADriverPopup:BADriverScreen:BADriversDV:GlobalPersonNameInputSet:FirstName-inputEl"]')
        this.driverlastname = Selector('[id="BADriverPopup:BADriverScreen:BADriversDV:GlobalPersonNameInputSet:LastName-inputEl"]')
        this.driverdob = Selector('[id="BADriverPopup:BADriverScreen:BADriversDV:DateOfBirth-inputEl"]')
        this.driverlicno = Selector('[id="BADriverPopup:BADriverScreen:BADriversDV:LicenseNumber-inputEl"]')
        this.driverlicstate = Selector('[id="BADriverPopup:BADriverScreen:BADriversDV:LicenseState-inputEl"]')
        this.driverok = Selector('[id="BADriverPopup:BADriverScreen:Update-btnInnerEl"]')
        this.paneldown = Selector('[id="southPanel-splitter-collapseEl"]')
        this.changelimt = Selector('[id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:BALineScreen:BALinePanelSet:BALineCoveragePanelSet:baLineLiabCatIterator:0:BALiabGroupInputSet:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:PackageTermInput"]')
        this.changedesc = Selector('[id="StartPolicyChange:StartPolicyChangeScreen:StartPolicyChangeDV:Description-inputEl"]')
    
    
    
    
    }
}
export default new CA_LOB(); 