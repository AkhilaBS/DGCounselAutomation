class DocumentPage{

    getDocumentMenu(){
        return cy.get("a[href*='documents']")
    }
    uploadTab(){
        return cy.get("cy.get('.upload')")
    }

    plussButtonForAddingGroups(){
        return cy.get('.multicheck > .fa')
    }
    

}

export default DocumentPage;