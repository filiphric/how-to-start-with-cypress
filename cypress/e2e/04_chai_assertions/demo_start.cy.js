/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/1')

})

it.only('check text of the first card', () => {

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'Milk')

});

it('check text of all cards in first list', () => {

  cy.get('[data-cy=card-text]')
    .eq(0)
    .should('have.text', 'Milk')

  cy.get('[data-cy=card-text]')
    .eq(1)
    .should('have.text', 'Bread')

  cy.get('[data-cy=card-text]')
    .eq(2)
    .should('have.text', 'Juice')

});