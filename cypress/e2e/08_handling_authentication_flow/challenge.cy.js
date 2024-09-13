/// <reference types="cypress" />

// challenge #1: sign up a new user in the application, you can do that manually
// with that user, make sure to create at least one board
//
// fill this custom "login" command with your credentials and fill the tests
// with appropriate commands. run these tests to make sure they work as intended
// you can take notice of the time it takes to execute them. as a next step
// wrap the commands in the custom command in the cy.session() function.
// observe how the execution time changes
//
// 💯 extra credit challenge: add two more tests to this file, but make them run against
// some other user (create a new one in your database). remember that your session
// needs a unique name for every email - you can use "email" as a unique identifier
Cypress.Commands.add('login', () => {

  cy.visit('/login')

  cy.get('[data-cy="login-email"]')
    .type('')
  
  cy.get('[data-cy="login-password"]')
    .type('')

  cy.get('[data-cy="login-submit"]')
    .click()

  cy.get('[data-cy="logged-user"]')
    .should('be.visible')

})

it('Logged in user sees a private board', () => {
  
});

it('Opens a board detail', () => {
  
});