/// <reference types="cypress" />

Cypress.Commands.add('login', () => {

  cy.session('user', () => {

    cy.visit('/login')

    cy.get('[data-cy="login-email"]')
      .type('filip@filiphric.sk')
    
    cy.get('[data-cy="login-password"]')
      .type('Asdf.1234#')

    cy.get('[data-cy="login-submit"]')
      .click()

    }, {
      validate() {
        cy.document()
          .its('cookie')
          .should('contain', 'auth_token')
      }
    })

})

it('Logged in user sees private board', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('Opens the private board', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .click()

})

it('Logs out logged in user', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-cy="logged-user"]')
    .click()

  cy.contains('Get started!')
    .should('be.visible')

})