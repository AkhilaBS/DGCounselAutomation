import documentUpload from "../PageObjects/DocumentUpload"
import documentUploaddata from "../../fixtures/documentUploadData.json"
const Documents = new DocumentUpload();
import "cypress-file-upload";



describe('documentUpload', () => {
    var data;
    var selectDepts, intMatter, extMatter, addTagsType, addTagsName;

    before(() => {
        cy.fixture('loginCreds').then(function(data)
        {
            this.data=data
        })
        cy.login (this.data.email,this.data.password)
    })
    beforeEach(() => {
        cy.fixture("documentUploadData").then((value) => {
        selectDepts = [data.selectDepartments.Dept1, data.selectDepartments.Dept2];
        extMatter = data.selectDepartments.selectMatterExt;
    })
    })
})