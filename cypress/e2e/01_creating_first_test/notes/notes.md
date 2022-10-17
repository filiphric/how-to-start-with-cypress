# Interacting with the application

## Basic commands:
[`.click()`](https://docs.cypress.io/api/commands/click.html#Syntax) - clicks a DOM element

[`.type()`](https://docs.cypress.io/api/commands/type.html#Syntax) - types into text input or textarea

## How to choose what to test?
Go for mission critical user stories first, then (maybe) do the rest. Only automate  stuff that saves you time.

## Typing special characters
Usually wrapped in `{}`. All can be [found in the documentation](https://docs.cypress.io/api/commands/type.html#Arguments).

## Clicking on elements
Cypress will only click single element that is visible, enabled, not covered by other elements, etc. The list of all the checks can be found [in Cypress docs](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability). 

## Useful reading
* [docs for .type() command](https://docs.cypress.io/api/commands/type.html)
* [special characters for .type() command](https://docs.cypress.io/api/commands/type.html#Arguments)
* [docs for .click() command](https://docs.cypress.io/api/commands/click.html#Syntax)
* [explanation of Cypress actionability checks](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability)
* [my blog on the topic of selectors](https://filiphric.com/cypress-basics-selecting-elements)
* [my blog on xpaths](https://filiphric.com/cypress-basics-xpath-vs-css-selectors)
* [my blog on the topic of .contains() command](https://filiphric.com/contains-an-overlooked-gem-in-cypress)
* [docs for .get() command](https://docs.cypress.io/api/commands/get.html#Usage)
* [docs for .contains() command](https://docs.cypress.io/api/commands/contains.html#Usage)
* [W3 Schools docs on selectors](https://www.w3schools.com/cssref/css_selectors.asp)
* [docs for .check() command](https://docs.cypress.io/api/commands/uncheck.html)
* [docs for .uncheck() command](https://docs.cypress.io/api/commands/uncheck.html)
* [types of inputs in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
* [nice article on different types of inputs with code examples](https://daily-dev-tips.com/posts/html-input-types/)