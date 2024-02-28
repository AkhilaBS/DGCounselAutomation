import "cypress-file-upload";
class DocumentUpload {

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
    AddButtonInTags: ()=>cy.get(".btn.btn-primary"),
    AssertDocs: () => cy.xpath("//tr//td[1]"),
    AssertDesc: () => cy.xpath("//tbody/tr[1]/td[2]"),
    Dashboard: ()=> cy.get('#dashboard-icon > img')
  };

  DocumentMenuclick() {
    cy.wait(1000)
    this.WebElements.DocsMenu().click({ force: true })
  }
  DashboardClick(){
    cy.wait(1000)
    this.WebElements.Dashboard().click({ force: true })
    cy.wait(5000)
  }

  UploadTabClick() {
    cy.wait(1000)
    this.WebElements.UploadTab().click({ force: true })
    
  }
  SelectDepartmentAddButton() {
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
    cy.wait(1000)
    this.WebElements.SelectExtMatRadioBtn().click();
  }
  selectMatterDropdown(extMatterSelect) {
    cy.get("select.textbox").select(extMatterSelect);
    cy.wait(1000);
  }
  browseButtonRTFFile() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["RTFFile-01.rtf"], {
      force: true,
    })
  }
  browseButtonPDF() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["Aws.pdf"], {
      force: true,
    })
  }
  browseButtonCSV() {
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["XLSFile.csv"], {
      force: true,
    })
  }
  browseButtonXlsx(){
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["XLXSfile-01.xlsx"], {
      force: true,
    })
  }

  browseButtonPNG(){
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["PNGFile.png"], {
      force: true,
    })
  }
  browseButtonPPTX(){
    cy.wait(1000);
    cy.get('[type="file"]').attachFile(["Personal Digicoffer Test cases.pptx"], {
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
  //tags
  AddTagsToDocument(tagsType, tagName) {
    this.AddTagsBtn();
    cy.get(".inputEl").click();
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.get(":nth-child(1) > .form-group > #caseType").each(($element, $index, $list) => {
    this.WebElements.AddButtonInTags().click({ force: true });
    if($index >= 2 ){
    this.WebElements.AddButtonInTags().click({ force: true });
    cy.wrap($element).clear().type(tagsType);
    cy.get(":nth-child(2) > .form-group > #caseType").clear().type(tagName); 
    }
    this.WebElements.AddButtonInTags().click({ force: true });
    this.WebElements.AddTagSaveBtn().click();
    cy.get(" div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > i:nth-child(1)").click();
    
    })
  }

  //Document Edit Save Button
  DocEditSaveBtn() {
    this.WebElements.DocsEditSave().click();
  }


  UploadSaveBtn() {
    this.WebElements.UploadSave().click({ force: true });
  }
  ViewChanges() {
    this.WebElements.ViewChange().click({ force: true });
    cy.scrollTo(0, 300, { ensureScrollable: false });
  }
  UploadCancelBtn() {
    this.WebElements.UploadCancel().click({ force: true });
  }
  //Document Name Assert
  DocsNameAssert(docsAssert) {
    this.WebElements.AssertDocs().should("contain", docsAssert);
  }
  //Description Change Assert
  DescChangesAssert(descAssert) {
    this.WebElements.AssertDesc().should("contain", descAssert);
  }

  //Document Edit only
  DocumentNameEdit(DocName) {
    cy.get(".fa fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      this.DocEditSaveBtn();
    })

  }
  //Description Edit only
  DocumentDescriptionEdit(DocDescription) {
    cy.get(".fa fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.scrollTo("bottom");
      cy.get("textarea[name='description']").clear({ force: true, }).type(DocDescription);
      cy.wait(1000);
      this.DocEditSaveBtn();
    })

  }
  //Document Expiration date only
  DocumentExpirationedit(ExpDate) {
    cy.get(".fa fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.scrollTo("bottom");
      cy.get(".mat-datepicker-input").clear({ force: true }).type(ExpDate);
      cy.wait(1000);
      this.DocEditSaveBtn();
    });
  }
  DocsNameandDescriptionEdit(DocName, DocDesc) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      cy.get(":nth-child(2) > .form-group > .form-control")
        .clear({
          force: true,
        })
        .clear()
        .type(DocDesc);
      this.DocEditSaveBtn();
    });
  }
  DocsNameandExpDate(DocName, ExpDate) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      cy.get(".mat-datepicker-input").clear({ force: true }).type(ExpDate);
      cy.wait(1000);
      this.DocEditSaveBtn();
    });
  }

  DocsNameandDescripitonExpdateEdit(DocName, DocDesc, ExpDate) {
    cy.get(".fa.fa-edit").each(($element, $index, $list) => {
      cy.wrap($element).click();
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.get("#documentName").clear().type(DocName);
      cy.wait(1000);
      cy.get(":nth-child(2) > .form-group > .form-control")
        .clear({
          force: true,
        })
        .type(DocDesc);
      cy.wait(1000);
      cy.get(".mat-datepicker-input").clear({ force: true }).type(ExpDate);
      this.DocEditSaveBtn();
    });
  }



}
export default new DocumentUpload;
