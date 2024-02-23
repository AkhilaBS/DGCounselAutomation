WebElements = {
    DocsMenu: () =>
      cy.get(":nth-child(3) > .left-menu-icon > .iconlink > .mattersicon"),
    UploadTab: () => cy.get(".upload"),
    SelectDept: () => cy.get(".multicheck > .fa"),
    DeptMinus: () => cy.get(".fa.fa-minus"),
    SelectExtMatRadioBtn: () => cy.get("#mat-radio-3"),
    EnableDown: () => cy.get('[for="btnradio1"]'),
    DisableDown: () => cy.get('[for="btnradio2"]'),
    EnableEncrypt: () => cy.get('[for="btnradio3"]'),
    DisableEncrypt: () => cy.get('[for="btnradio5"]'),
    AddTags: () => cy.get('[for="btnradio4"]'),
    ATSelectAll: () => cy.get(".inputEl"),
    ATagCheckbox: () => cy.xpath("//td //input[@type='checkbox']"),
    TagType: () => cy.get(":nth-child(1) > .form-group > #caseType"),
    TagsInput: () => cy.get(":nth-child(2) > .form-group > #caseType"),
    ATFirst: () =>
      cy.get(
        ":nth-child(1) > .documents-list > .row > .col-2 > .icon-list > table > tbody > tr > .ng-star-inserted > input"
      ),
    ATSecond: () =>
      cy.get(
        ":nth-child(2) > .documents-list > .row > .col-2 > .icon-list > table > tbody > tr > .ng-star-inserted > input"
      ),
    AddBtnAddTags: () => cy.get(".tags-width > .btn"),
    AddTagSaveBtn: () => cy.get(".btnsave"),
    AddTagCancelBtn: () => cy.get(".btncancel"),
    AddTagXBtn: () => cy.get(".col-1 > div > .fa"),
    DocsEdit: () => cy.get(".fa.fa-edit"),
    DocsEditSave: () => cy.get(".btnsave"),
    UploadSave: () => cy.get(".btnsave"),
    UploadCancel: () => cy.get(".btncancel"),
    ViewChange: () => cy.get(".alertbtn"),
    UploadMore: () => cy.get(".upload-btn"),
    AssertDocs: () => cy.xpath("//tr//td[1]"),
    AssertDesc: () => cy.xpath("//tbody/tr[1]/td[2]"),
  };