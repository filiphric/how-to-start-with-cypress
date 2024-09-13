/// <reference types="cypress" />
// ⚠️ database is filled with data before the test

beforeEach( () => {
  cy.visit('/board/1')
}) 
// challenge #1: add proper timeout to this test so that it passes
it('loads all the cards in board detail', () => {

  cardsLoadSlowly(5000)

  cy.get('[data-cy=card]')
    .should('have.length', 5)
  
});

// challenge #2: if you run this test a couple of times, you will find out it is flaky. try to debug it and add a command to query chain that would make it stable
it('checks the detail of first card', () => {

  cardsLoadRandomly(3000)

  cy.get('[data-cy=card]')
    .first()
    .click()

  cy.get('[data-cy="card-detail-title"]')
    .should('have.value', 'Milk')


})

// challenge #3: we are getting a false positive within this test. fix it so it fails properly
it('shows no boards in board list', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('not.exist')
  
});