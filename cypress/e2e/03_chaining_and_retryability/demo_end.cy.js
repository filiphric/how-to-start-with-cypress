/// <reference types="cypress" />

beforeEach(() => {

  cy.visit('/board/1')

});

it('has a card with due date on 1st March', () => {

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('[data-cy=card]', 'Mar 01 2022')

})

it('checks date of a card', () => {

  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Juice')

  cy
    .get('[data-cy=due-date]')
    .eq(2)
    .should('have.text', 'Feb 14 2022')
  
});

it('check text of all cards in first list', () => {
  
  cy.get('[data-cy=card-text]')
    .then( cards => {
    
      // https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions
      expect(cards[0]).to.have.text('Milk')
      expect(cards[1]).to.have.text('Bread')
      expect(cards[2]).to.have.text('Juice')

    })

});
