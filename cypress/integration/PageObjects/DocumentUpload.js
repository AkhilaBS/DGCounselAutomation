import "cypress-file-upload";
class DocumentUpload{

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

  DocumentMenuclick(){
    cy.wait(1000)
    this.WebElements.DocsMenu().click({ force: true })
  }

  UploadTabClick(){
    cy.wait(1000)
    this.WebElements.UploadTab().click({ force: true })
  }
  SelectDepartmentAddButton(){
    cy.wait(1000)
    this.WebElements.SelectDept().click({ force: true })
  }

  SelectDepts(deptSelect) {
    for (let i = 0; i < deptSelect.length; i++) {
      cy.xpath(
        "//div//label[text()='" + deptSelect[i] + "']//following::input[1]"
      ).click({ force: true });
    }
  }
  SelectDeptMinus() {
    cy.scrollTo("top");
    this.WebElements.DeptMinus().click({ force: true });
  }
  SelectExternalMatterRadioBtn() {
    this.WebElements.SelectExtMatRadioBtn().click();
  }
  selectMatterDropdown(extMatterSelect) {
    cy.get("select.textbox").select(extMatterSelect);
    cy.wait(1000);
  }
   browseButton1(){
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["RTFFile-01.rtf", "DOCXFile-01.docx"], {
      force: true,
    })
  }
    browseButton1(){
      cy.wait(1000);
      cy.get('[type="file"]').attachFile(["RTFFile-01.rtf", "DOCXFile-01.docx"], {
        force: true,
      })
    
  }
  ClickBrowseBtnUploadMore() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["Aws.pdf", "file_example_XLS_100.xls"], {
      force: true,
    });
  }
  EnableDownload() {
    this.WebElements.EnableDown().click({ force: true });
  }
  DisableDownload() {
    this.WebElements.DisableDown().click();
  }
  AddTagsBtn() {
    cy.get('[for="btnradio4"]').click();
  }
  ATFirstOne() {
    this.WebElements.ATFirst().click({ force: true });
  }
  ATSecondOne() {
    this.WebElements.ATSecond().click();
    //   cy.scrollTo("bottom");
  }
  Tagtypes(tagType) {
    this.WebElements.TagType(tagType);
  }
  TagsInputs(tagsInput) {
    this.WebElements.TagsInput(tagsInput);
  }
  SelectAllTags() {
    this.WebElements.ATSelectAll().click();
  }
  UpSaveDisable() {
    cy.get(".btnsave", {
      timeout: 10000,
    })
      .should("be.enabled")
      .click();
  }
  EnableEncryption() {
    this.WebElements.EnableEncrypt().click();
  }
  DisableEncryption() {
    this.WebElements.DisableEncrypt().click();
  }
  AddTags() {
    this.WebElements.AddTags().click();
    cy.scrollTo("bottom");
  }



}
export default DocumentUpload;
