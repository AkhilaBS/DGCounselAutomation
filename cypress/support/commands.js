// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password, shouldSucceed = true) => {
    cy.visit('http://staging.corp.lauditor.com');
    // Enter the credentials
  cy.get("input[formcontrolname='email']").type(email);
  cy.get("#id_password").type(password);
  
  // Click the login button
  cy.get("button[type='submit']").click();

  if (shouldSucceed) {
    // Assert that login is successful
    cy.url().should('include', 'http://staging.corp.lauditor.com/grid'); 
  } else {
    // Assert that login fails and displays an error message
    cy.get('#id_alert').should('be.visible'); // Replace '.error-message' with the selector for the error message element
  }

})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })