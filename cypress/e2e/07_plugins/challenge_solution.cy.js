/// <reference types="cypress" />

// challenge #1: install the cypress-real-events plugin
// which you can use to trigger actions like hover, swipe, etc
// using this plugin, write a test wher you will hover over
// board item in board list and click on the star element
it('bookmarks a board', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .eq(0)
    .realHover()

  cy.get('[data-cy=star]')
    .eq(0)
    .click()
  
});