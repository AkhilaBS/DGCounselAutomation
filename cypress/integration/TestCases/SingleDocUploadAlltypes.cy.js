import Documents from "../PageObjects/DocumentUpload"
import documentUploadData from "../../fixtures/documentUploadData.json"
//const Documents = new DocumentUpload();
import "cypress-file-upload";



describe('documentUpload', () => {
    var data;
    var selectDepts, intMatter, extMatter, addTagsType, addTagsName;

    before(() => {
        cy.fixture('loginCreds').then(function(data)
        {
            this.data=data
            cy.login (this.data.email,this.data.password)
        })
        
    })
    beforeEach(() => {
        cy.fixture("documentUploadData").then((value) => {
            data = value;

        selectDepts = [data.selectDepartments.Dept1, data.selectDepartments.Dept2];
        extMatter = data.selectDepartments.selectMatterExt;
        Documents.DocumentMenuclick();
        Documents.UploadTabClick();
        Documents.SelectDepartmentAddButton();
        Documents.SelectDepts(selectDepts);
        Documents.SelectDeptMinus();
        Documents.SelectExternalMatterRadioBtn();
    })
    })
    afterEach(() => {
        cy.wait(1000)
        Documents.DashboardClick();
      });
      
    it("TestCase: 1.SingleRTF-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        Documents.browseButtonRTFFile();
        Documents.UploadSaveBtn();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })
    it.only("TestCase: 2.SinglePDF-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        Documents.browseButtonPDF();
        Documents.UploadSaveBtn();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })
    it("TestCase: 3.SingleCSV-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        Documents.browseButtonCSV();
        Documents.UploadSaveBtn();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })
    it("TestCase: 5.SingleXLXS-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        browseButtonXlsx()
        Documents.UploadSaveBtn();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })
    it("TestCase: 6.SinglePNG-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        browseButtonXlsx()
        Documents.browseButtonPNG();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })
    it("TestCase:7 .SinglePNG-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        browseButtonXlsx()
        Documents.browseButtonPPTX();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })

})