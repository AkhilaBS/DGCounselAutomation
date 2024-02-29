import Documents from "../PageObjects/DocumentUpload"
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
        Documents.SelectExternalMatterRadioBtn();
        Documents.SelectDepartmentAddButton();
        Documents.SelectDepts(selectDepts);
        Documents.SelectDeptMinus();
        cy.wait(2000);
        
    })
    })
    afterEach(() => {
        cy.wait(1000)
        Documents.DashboardClick();
      })

      it("TestCase:1.DocNameEdit-ExtMat-Upload-ViewChanges", () => {
        Documents.selectMatterDropdown(extMatter);
        Documents.BrowseButtondocTC01()
        Documents.DocumentNameEdit([data.editDocumentName.EditDoc1,data.editDocumentName.EditDoc2]);
        Documents.UploadSaveBtn();
        Documents.ViewChanges();
        cy.wait(2000)
        Documents.DocsNameAssert(data.editDocumentName.DocAssest01)
        Documents.DocsNameAssert(data.editDocumentName.DocAssest02)
      })
      it("TestCase:2.DocNameEdit-ExtMat-Upload-Cancel", () => {
        Documents.selectMatterDropdown(extMatter);
        Documents.BrowseButtondocTC01()
        Documents.DocumentNameEdit([data.editDocumentName.EditDoc1,data.editDocumentName.EditDoc2]);
        Documents.UploadCancelBtn()
      })

      it("TestCase:1.DocNameEdit-ExtMat-Upload-ViewChanges", () => {
        Documents.selectMatterDropdown(extMatter);
        Documents.BrowseButtondoTC02()
        Documents.DocumentNameEdit([data.editDocumentName.EditDoc3,data.editDocumentName.EditDoc4]);


      })

    })