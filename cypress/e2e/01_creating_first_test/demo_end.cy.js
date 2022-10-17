/// <reference types="cypress" />

it('creates a new list with a card in it', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.get('[data-cy="new-card"]')
    .click()
  
  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

});

it('bookmarks a board', () => {

  cy.visit('/')

  cy.get('[data-cy=star]')
    .eq(0)
    .click({ force: true })

})
