# intercepting a network request

Cypress is great for creating a combination of UI and API tests. You can take a look into how your application is behaving and what kind of data it is sending to the server

## .intercept()
- similar syntax to `.request()` but in this case we are **not** sending requests but are **observing** requests that our application does.
```js
cy.intercept({
    method: 'POST',
    url: '/api/cards'
  }).as('createCard')
```

## stabilizing tests
- intercept can help stabilize a test
- by waiting for a certain request to occur, we can wait for a response and proceed our test then

## matching a request
- by string, regex or minimatch

## Useful reading
* [docs for .intercept() command](https://docs.cypress.io/api/commands/intercept.html)
* [docs for .as() command](https://docs.cypress.io/api/commands/as.html)
* [docs for .wait() command](https://docs.cypress.io/api/commands/wait.html)
* [docs for .its() command](https://docs.cypress.io/api/commands/its.html)
* [tool for testing minimatch](https://pthrasher.github.io/minimatch-test/)
* [tool for testing regular expressions](https://regexr.com/)