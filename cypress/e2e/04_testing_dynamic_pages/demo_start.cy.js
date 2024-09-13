/// <reference types="cypress" />

import { cardsLoadRandomly, cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

beforeEach(() => {

  cy.visit('/board/1')

});

it('has zero cards', () => {

  cy.get('[data-cy=card]')
    .should('not.exist')

})

it('loads all cards', () => {

  cardsLoadSlowly(3000)

  cy.get('[data-cy=card]')
    .should('have.length', 5)

})

it.only('shows details of "Juice" card', () => {

  cardsLoadRandomly(4000)
  
  cy.get('[data-cy=card]')
    .last()
    .find('[data-cy=card-text]', { timeout: 10000 })
  
});