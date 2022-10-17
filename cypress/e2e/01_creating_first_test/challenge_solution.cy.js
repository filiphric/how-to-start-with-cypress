/// <reference types="cypress" />

/*
  ⚠️ before doing the challenge, create a new board in the app
  you can change "it" to "it.only" to run a single test
  ℹ️ you might need to reset your app in between tests. to do that
  use F2 key to toggle tools that will help you
*/

// challenge #1: create a new list in your board
it('creating a new list', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

});

// challenge #2: create a new card in your list
it('creating a new card', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()
  
  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

});

// challenge #3: rename the board
it('renaming a board', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="board-title"]')
    .clear()
    .type('Stuff to steal{enter}')

});

// challenge #4: delete the board
it('deleting a board', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="board-options"]')
    .click()

  cy.get('[data-cy="delete-board"]')
    .click()

});

// challenge #5: open a card and change its description
it('changing the card description', () => {

  cy.visit('/board/2?card=1')

  cy.get('[data-cy="card-description"]')
    .type('Add a chapter on interaction{enter}')

});

