/// <reference types="cypress" />

it('sends a request over API', () => {

  cy.request('POST', '/api/boards', {
    name: "I created this board using .request() command!"
  })

  cy.visit('/')
  
});

it('response gets 201 status', () => {

  cy.request('POST', '/api/boards', {
      name: "I created this board using .request() command!"
    })
    .its('status')
    .should('eq', 201)
  
});

it('testing board list', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( (board) => {

    expect(board.status).to.eq(200)
    expect(board.body).to.have.length(2)
    expect(board.body[0].id).to.be.a('number')
    expect(board.body[0].starred).to.be.false
    expect(board.body[0].user).to.eq(0)

  })
  
});

before( () => {

  cy.request('POST', '/api/reset')

})  