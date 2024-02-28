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
    it("TestCase: 1.SingleRTF-Upload-ViewChanges", () => {
    
        Documents.selectMatterDropdown(extMatter);
        Documents.browseButtonRTFFile();
        Documents.UploadSaveBtn();
        Documents.ViewChanges();
        cy.wait(2000);
    
    })
    it("TestCase: 2.SinglePDF-Upload-ViewChanges", () => {
    
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

})