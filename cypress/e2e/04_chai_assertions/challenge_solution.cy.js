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
    .then( cards => {
      expect(cards[0]).to.have.text('Milk')
      expect(cards[1]).to.have.text('Bread')
      expect(cards[2]).to.have.text('Juice')
    })

})

// challenge #2: refactor this to test checkboxes in the first list using .then() command
it('cards are checked', () => {

  cy.get('[data-cy=list]')
    .eq(0)
    .find('[data-cy=card-checkbox]')
    .as('card-checkboxes')

  cy.get('@card-checkboxes')
    .then( cards => {
      expect(cards[0]).to.be.checked
      expect(cards[2]).to.be.checked
    })

});

// challenge #3: check number of lists an their names using .then() command
it('number of lists and list names', () => {

  cy.get('[data-cy=list-name]')
    .then( lists => {

      expect(lists).to.have.length(2)
      expect(lists[0]).to.have.value('Groceries')
      expect(lists[1]).to.have.value('Drugstore')

    })

})

// challenge #4: check visibility of lists using .then() command
it('list visibility', () => {

  cy.get('[data-cy=list]')
    .then( list => {
      expect(list[0]).to.be.visible
      expect(list[1]).to.be.visible
    })
  
})