# Testing dynamic pages

## Command flow
- Cypress commands will not race-condition. Every command waits for the previous to finish its job. As soon as command is finished, it will move to the next command. This is very important to keep in mind when doing negative assertions, such as `.should('not.exist')`

## Retry-ability
- this is one of the core concepts in Cypress. You might know this as "fluent-wait" if you are coming from Selenium
- by default, Cypress waits for 4000 milliseconds, but this can be adjusted in the command, test, or globally in `cypress.config.js` file
- `.should()` command will make the previous query chain retry

## Queries, actions, assertions
- Retry-ability is built-in to Cypress commands. There are different way of how retry is done for certain command. 
- actions like `.click()`, `.type()` will wait for an element to be actionable, but will not retry the action itself (test will not click multiple times)
- assertions will evaluate the value that is being passed onto them and will trigger a retry of previous query. This helps keeping tests stable even in situations when DOM is re-rendered

## Useful reading
* [Cypress docs on retry-ability](https://docs.cypress.io/guides/core-concepts/retry-ability#Commands-Queries-and-Assertions)
* [common assertions](https://docs.cypress.io/guides/references/assertions.html#Common-Assertions)
* [list of different assertions bundled within Cypress](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions)
* [my blog on the topic of testing lists](https://filiphric.com/testing-lists-of-items)

