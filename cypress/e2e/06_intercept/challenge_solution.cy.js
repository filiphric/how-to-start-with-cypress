/// <reference types="cypress" />

beforeEach( function() {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'new board' })
    .its('body.id')
    .as('boardId')
    .then( boardId => {

      cy.request('POST', '/api/lists', {
        boardId,
        name: 'new list'
      })

    })

})

// challenge #1: create a card using UI and use .intercept() command
// for watching the http request for the card creation
// test the response status code and some of the attributes 
// of the card you created
it('creates a card', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.intercept('POST', '/api/cards')
    .as('createCard')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('card{enter}')

  cy.wait('@createCard')
    .then( ({ response, request }) => {

      expect(request.body.boardId).to.eq(this.boardId)
      expect(response.statusCode).to.eq(201)
      expect(response.body.description).to.be.empty

    })
  
});

// challenge #2: create and check the card you created using UI and use .intercept() command
// to catch the http request that happens. test its status code
it('checking the card', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.intercept('PATCH', '/api/cards/*').as('checkCard')
  
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

  cy.get('[data-cy="card-checkbox"]')
    .check()

  cy.wait('@checkCard')
    .its('response.statusCode')
    .should('eq', 200)

});

// challenge #3: assert that 'boardId' is part of attributes that is 
// sent to the server when a new list is created
it('creates a new list', function() {

  cy.visit(`/board/${this.boardId}`)

  cy.intercept('POST', '/api/lists')
    .as('createList')

  cy.get('[data-cy="create-list"]')
    .click()

  cy.get('[data-cy="add-list-input"]')
    .type('list 2{enter}')

  cy.wait('@createList')
    .its('request.body.boardId')
    .should('eq', this.boardId)
  
});

// challenge #4: delete a list and assert that the server responded 
// with a correct status code
it('deletes a list', function() {

  cy.intercept('DELETE', '/api/lists/*').as('deleteList')

  cy.visit(`/board/${this.boardId}`)

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

  cy.wait('@deleteList')
    .its('response.statusCode')
    .should('eq', 200)

});