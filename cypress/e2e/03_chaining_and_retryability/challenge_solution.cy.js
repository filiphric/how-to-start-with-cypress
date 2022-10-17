/// <reference types="cypress" />

// ⚠️ database is filled with data before the test
// ⚠️ some of the examples contain "evil code" that will cause some API responses to load slowly or randomly
import { cardsLoadRandomly, cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

// challenge #1: there are two assertions in this test. one of them passes, but other does not
// try to change command chain in a way that .contains() will become a child command
// and the test passes
it('asserting card titles', () => {

  cy.visit('/board/1')

  cy.contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Bread')

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Shampoo')

})

// challenge #2: if you run the following test multiple times, you will find out that it does not always pass
// use chrome console to diagnose what each command yields and then refactor
// the test to pass consistently
it('has a card with the text "bread"', () => {

  // 😈 evil code
  cardsLoadRandomly(3000)

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .should('contain.text', 'Bread')

})

// challenge #3: this test is failing, because the response from the server is returning too slowly
// add a timeout option, so that the test will wait long enough
it('has five cards', () => {

  // 😈 evil code
  cardsLoadSlowly(6000) 

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]', { timeout: 7000 })
    .should('have.length', 5)
  
});

// challenge #4: the chain in this command is way too long. more importantly, it causes the test 
// to be unstable. use chrome console to diagnose what each command yields 
// and delete commands that are not needed for this test
it('has a card with the text "bread" with the date of Feb 14 2022', () => {

  // 😈 evil code
  cardsLoadRandomly(3000)

  cy.visit('/board/1')

  cy.contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Bread')
  
});