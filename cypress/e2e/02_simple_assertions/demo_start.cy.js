/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/1')

})

it('creates a card', () => {

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

})

it('has proper number of cards', () => {

})

it('has the checkbox in checked state', () => {

})

it('has correct list name', () => {

})