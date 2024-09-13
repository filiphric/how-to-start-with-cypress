/// <reference types="cypress" />

// ⚠️ database is filled with data before the test
beforeEach(() => {

  cy.visit('/board/1')

});

// challenge #1: there are two assertions in this test. one of them passes, but other does not
// try to change command chain in a way that .contains() will become a child command
// and the test passes
it('asserting card titles', () => {

  cy.contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Bread')

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Shampoo')

})

// challenge #2: this test is passing, but the command chain in this test 
// is way too long and confusing. it’s testing different items, although 
// it is not clear at first sight. run this test and split the command 
// chain in ways that’s easier to read
it('checks list name, card attributes and opens card detail', () => {

  // has card with text "bread"
  cy.contains('Bread')

  // list name is correct
  cy.get('[data-cy=list-name]')
    .first()
    .should('have.value', 'Groceries')
    
  // third card contains text "Juice"
  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Juice')
    
  // second card has proper date
  cy.get('[data-cy=due-date]')
    .eq(1)
    .should('have.text', 'Feb 14 2022')
    
  // open card detail
  cy.get('[data-cy=card]')
    .last()
    .click()
  
});

// challenge #3: check number of lists an their names by selecting list name elements and passing them to .then() command
it('number of lists and list names', () => {

  cy.get('[data-cy=list-name]')
    .then( lists => {

      expect(lists).to.have.length(2)
      expect(lists[0]).to.have.value('Groceries')
      expect(lists[1]).to.have.value('Drugstore')

    })

})

// challenge #4: this test is failing. use browser console to see context of each command and debug why it is failing
it('checks card attributes', () => {

  cy.get('[data-cy=due-date]')
    .first()
    .should('have.attr', 'class') // this changes context to class list

  cy.get('[data-cy=due-date]')
    .first() // we need to re-query our element
    .should('be.visible')
  
});

