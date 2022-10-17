const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const twoBoards = require('./fixtures/twoBoards.json')

const beforeTestSeeds = {
  'cypress/e2e/01_creating_first_test/demo_start.cy.js': twoBoards,
  'cypress/e2e/01_creating_first_test/demo_end.cy.js': twoBoards,
  'cypress/e2e/01_creating_first_test/challenge_solution.cy.js': twoBoards,
  'cypress/e2e/02_simple_assertions/challenge_solution.cy.js': singleBoard,
  'cypress/e2e/03_chaining_and_retryability/demo_start.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_chaining_and_retryability/demo_end.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_chaining_and_retryability/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_chaining_and_retryability/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/04_chai_assertions/demo_start.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/04_chai_assertions/end.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/04_chai_assertions/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/04_chai_assertions/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_intercept/demo_start.cy.js': singleBoardSingleList,
  'cypress/e2e/06_intercept/demo_end.cy.js': singleBoardSingleList
}

const beforeEachTestSeeds = {
  'cypress/e2e/02_simple_assertions/demo_start.cy.js': singleBoardSingleList,
  'cypress/e2e/02_simple_assertions/demo_end.cy.js': singleBoardSingleList,
  'cypress/e2e/11_network_stub/demo_start.cy.js': singleBoard,
  'cypress/e2e/11_network_stub/demo_end.cy.js': singleBoard
}

before( () => {

  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeTestSeeds[`${path}`]
  
  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach( () => {

  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeEachTestSeeds[`${path}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})