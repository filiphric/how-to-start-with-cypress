/// <reference types="cypress" />

// SOLUTION EXPLANATION: challenge #1
// to make sure cy.session works for you, you need to add 
// experimentalSessionAndOrigin: true to your cypress.config.js
// after you’ve done this, simply wrapping the commands in the cy.session() 
// function will make more than 1 second difference between these tests
//
// 🚨 these tests pass but will wipe the database when you run them
// this means that if you created a new user, it will get deleted

// SOLUTION EXPLANATION: extra credit challenge
// these solutions overlap, because we have expanded our custom "login"
// command to take arguments. email will also serve as the name for
// our session. this way we have two sessions in our tests which we can
// load at any time of our test (we can even change order of tests,
// and it will still work!)
Cypress.Commands.add('login', (email, password) => {

  cy.session(email, () => {

    cy.visit('/login')

    cy.get('[data-cy="login-email"]')
      .type(email)
    
    cy.get('[data-cy="login-password"]')
      .type(password)

    cy.get('[data-cy="login-submit"]')
      .click()

    cy.get('[data-cy="logged-user"]')
      .should('be.visible')

  })

})

it('Logged in user sees private board with filip@filiphric.sk', () => {

  cy.login('filip@filiphric.sk', 'Asdf.1234#')

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('Opens the private board filip@filiphric.sk', () => {

  cy.login('filip@filiphric.sk', 'Asdf.1234#')

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .click()

})

it('Logged in user sees private board with filip@example.com', () => {

  cy.login('filip@example.com', 'Asdf.1234#')

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('Opens the private board filip@filiphric.sk', () => {

  cy.login('filip@example.com', 'Asdf.1234#')

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .click()

})