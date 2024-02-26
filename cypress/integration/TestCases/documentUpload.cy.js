import documentUpload from "../PageObjects/DocumentUpload"
import documentUploaddata from "../../fixtures/documentUploaddata.json"
const Documents = new DocumentUpload();
import "cypress-file-upload";



describe('documentUpload', () => {
    beforeEach(() => {
        cy.fixture('loginCreds').then(function(data)
        {
            this.data=data
        })
        cy.login (this.data.email,this.data.password)
    })


})