# Assertions

## Commands used:
[`.should()`](https://docs.cypress.io/api/commands/should.html#Syntax) - the main command in Cypress to make assertions

[`.check()`](https://docs.cypress.io/api/commands/check.html#Syntax) - check a checkbox. compared to `.click()` it keeps the state of the checkbox if it’s already checked

 `beforeEach()` - Mocha hook to execute a code before every test. Useful for commands like `.visit()`

## Basic assertions
All can be found in [Cypress documentation](https://docs.cypress.io/guides/references/assertions.html#Common-Assertions)

## What to check in tests?
While checking classes is nice, if we want make sure our app is visually perfect, it’s better to check some image comparison tools, like [Applitools](https://applitools.com/).

## Checking text
As users we often see a text on a webpage, but that text might be wrapped in various HTML tags. For example, `<input>` does not actually have text, but holds a value. Cypress is checking this, so be mindful of which assertion you use.


## Useful reading
* [my blog on asserting visibility of elements](https://filiphric.com/cypress-basics-check-if-element-exists)
* [docs for .should() command](https://docs.cypress.io/api/commands/should.html)
* [docs for .check() command](https://docs.cypress.io/api/commands/check.html#Syntax)
* [examples of simple assertions with the .should() command](https://docs.cypress.io/guides/references/assertions.html#Common-Assertions)
* [what is array in JavaScript](https://javascript.info/array)