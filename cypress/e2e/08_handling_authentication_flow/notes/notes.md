# Handling authentication flow

Authentication is something that often times differs from app to app. But every time we log in, there’s are three parts present in the whole story:

1. Browser
2. Application
3. Server

In our application, email and password fields get sent via `/api/login` endpoint to the server. Server then responds with an authorization token, which is saved to the browser (in the cookies). Our application will then send the authorization token with every api request. This was server knows it communicates with an authenticated and authorized user. In our application this flow is represented in its simplest form, but things can get more complicated as the authorization methods get more advanced.

To authenticate within our app we can choose two different strategies:

1. log in programmatically, using `cy.request()` and other commands
2. login via UI and cache the browser session

## cy.session()
This command will save all the browser data, like cookies, local storage etc. This means that you can load your browser in a desired state. Remember those three parts I mentioned at the beginning? `cy.session()` got you covered with the **browser** part. This means you can create a sequence of commands and save the state of the browser at the end of that sequence:

```js
Cypress.Commands.add('login', (email, password) => {

  cy.session(email, () => {

    cy.visit('/login')

    cy.get('[data-cy="login-email"]')
      .type(email)
    
    cy.get('[data-cy="login-password"]')
      .type(password)

    cy.get('[data-cy="login-submit"]')
      .click()

    cy.get('[data-cy="logged-user"]') // make sure that we are on "logged in" screen
      .should('be.visible')

  })

})
```

If you call this custom `cy.login()` command more than once in your spec, the sequence of steps will only get ran twice. As a result, your tests can become way faster!

The best thing - you can do a programmatic login, handle the response yourself (e.g. save it to cookies), and then cache the browser state. That’s some speed right there 🚀

## Useful reading
* [cy.session() command documentation](https://docs.cypress.io/api/commands/session)
* [cypress-data-session command that enables you to do even more with session API](https://github.com/bahmutov/cypress-data-session)
* [docs on multi-domain testing in Cypress](https://dev.to/cypress/multi-domain-origin-testing-in-cypress-1aog)
* [recipe for google login](https://docs.cypress.io/guides/end-to-end-testing/google-authentication)
* [my blog post going deeper in explaining google login and how to set it up](https://filiphric.com/google-sign-in-with-cypress)