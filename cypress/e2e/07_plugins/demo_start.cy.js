/// <reference types="cypress" />

it('API request', () => {

  cy.request('POST', '/api/boards', { name: 'Look at me!!' })    

});