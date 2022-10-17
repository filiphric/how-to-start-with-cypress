/// <reference types="cypress" />
// ⚠️ database is filled with data before the test

beforeEach( () => {
  cy.visit('/board/1')
}) 
// challenge #1: refactor this test so that it uses a single .then() command
it('cards contain proper text', () => {

    cy.get('[data-cy=list]')
      .eq(0)
      .find('[data-cy=card-text]')
      .as('cards')
  
    cy.get('@cards')
      .eq(0)
      .should('have.text', 'Milk')
  
    cy.get('@cards')
      .eq(1)
      .should('have.text', 'Bread')
    
    cy.get('@cards')
      .eq(2)
      .should('have.text', 'Juice')
  
  })

// challenge #2: refactor this to test checkboxes in the first list using .then() command
it('cards are checked', () => {

  cy.get('[data-cy=list]')
    .eq(0)
    .find('[data-cy=card-checkbox]')
    .as('card-checkboxes')

  cy.get('@card-checkboxes')
    .eq(0)
    .should('be.checked')

  cy.get('@card-checkboxes')
    .eq(2)
    .should('be.checked')

});

// challenge #3: check number of lists an their names using .then() command
it('number of lists and list names', () => {

})

// challenge #4: check visibility of lists using .then() command
it('list visibility', () => {
  
})