/// <reference types="cypress" />
/*
  ⚠️ before doing the challenge, create a new board in the app
  you can change "it" to "it.only" to run a single test
  ℹ️ you might need to reset your app in between tests. to do that
  use F2 key to toggle tools that will help you
*/

beforeEach( () => {

  cy.visit(); // ⚠️ add ID of your board

})

// challenge #1: create a new list and assert it is visible
it('creating a list', () => {

})

// challenge #2: create one more list and assert that there are exactly two in the app
it('asserting number of lists', () => {

})

// challenge #3: start this test with a single list in the app. delete it and then assert it does not exist
it('deleting a list', () => {

})

// challenge #4: start the test with a single card, check it and then assert it is checked
it('asserting the checked state', () => {

})

// challenge #5: start test with a single list in the app. change the name of the list and then assert the changed name of the list
it('asserting list name', () => {

})

// challenge #6: create a new card and assert its text
it('assert text of created card', () => {

})

// challenge #7: click on newly created card and check that the detail modal has opened
it('checking the card detail', () => {

})

// challenge #8: opened created card and close it. check closing the card
it('closing the card', () => {

})