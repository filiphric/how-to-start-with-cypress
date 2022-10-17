/// <reference types="cypress" />

it('API request', () => {

  cy.api('POST', '/api/boards', { name: 'Look at me!!' })    

});