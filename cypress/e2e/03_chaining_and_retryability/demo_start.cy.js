/// <reference types="cypress" />

it('opens a card with due date on 1st March', () => {

  cy.visit('/board/1')
    
})

it('loads cards in our list very slowly', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .should('have.length', 5)
  
});

it('loads cards in our list randomly', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .eq(1)
    .should('contain.text', 'Bread')
  
});

