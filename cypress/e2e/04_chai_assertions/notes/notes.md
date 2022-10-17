# Chai assertions

## Bundled libraries
- there are many libraries bundled into Cypress, like chai, sinon, jQuery,...
- `.should()` command is a wrapper for different assertion libraries

## expect vs. should
```js
// this:
cy
  .get('[data-cy="card-text"]')
  .eq(0)
  .should('have.text', 'Milk')

// is exactly same as this:
cy
  .get('[data-cy="card-text"]')
  .eq(0)
  .then( cardText => {
    expect(cardText).to.have.text('Milk')
  })
```

Using `expect` is useful especially if we have multiple elements to test and want to use a single `.get()` to select them.

## Difference between .then() and .should()
You can pass a function to both of the commands, but `.should()` will retry that function if it’s not passing. Super useful to create flake-free tests!

## Useful reading
* [common assertions](https://docs.cypress.io/guides/references/assertions.html#Common-Assertions)
* [list of different assertions bundled within Cypress](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions)
* [docs for .then() command](https://docs.cypress.io/api/commands/then.html)
* [my blog on the topic of testing lists](https://filiphric.com/testing-lists-of-items)

