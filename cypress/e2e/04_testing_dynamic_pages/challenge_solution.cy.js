/// <reference types="cypress" />
// ⚠️ database is filled with data before the test

import { cardsLoadSlowly, cardsLoadRandomly } from '../../../workshop-scripts/evilCode'

// challenge #1: add proper timeout to this test so that it passes
it('loads all the cards in board detail', () => {

  cardsLoadSlowly(5000)
  
  cy.visit('/board/1')

  
  cy.get('[data-cy=card]', { timeout: 6000 })
  .should('have.length', 5)
  
});

// challenge #2: if you run this test a couple of times, you will find out it is flaky. try to debug it and add a command to query chain that would make it stable
it('checks the detail of first card', () => {
  
  cardsLoadRandomly(3000)

  cy.visit('/board/1')
  
  cy.get('[data-cy=card]')
    .first()
    .contains('Milk')
    .click()

  cy.get('[data-cy="card-detail-title"]')
    .should('have.value', 'Milk')

})

// challenge #3: we are getting a false positive within this test. fix it so it fails properly
it.skip('shows no boards in board list', () => {

  cy.visit('/')

  cy.contains('Loading')
    .should('not.exist')

  cy.get('[data-cy=board-item]')
    .should('not.exist')
  
});