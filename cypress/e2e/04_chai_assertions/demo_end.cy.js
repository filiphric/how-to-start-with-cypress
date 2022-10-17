/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/1')

})

it('check text of the first card', () => {

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .then( cardText => {
      expect(cardText).to.have.text('Milk')
    })

});

it('check text of all cards in first list', () => {

  cy.get('[data-cy=card-text]')
    .should( cards => {

      expect(cards[0]).to.have.text('Milk')
      expect(cards[1]).to.have.text('Bread')
      expect(cards[2]).to.have.text('Juice')

    })

});