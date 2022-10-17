/// <reference types="cypress" />

import { cardsLoadRandomly, cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

it('opens a card with due date on 1st March', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('Mar 01 2022')
    .click()

})

it('loads cards in our list very slowly', () => {

  // 😈 evil code
  cardsLoadSlowly(5000) 

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]', { timeout: 6000 })
    .should('have.length', 5)
  
});

it('loads cards in our list randomly', () => {

  // 😈 evil code
  cardsLoadRandomly(3000) 

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .should('contain.text', 'Bread')
  
});