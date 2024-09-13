# Effective command chaining

## Chaining
- every command passes information onto another
- commands have a parent/child relationship, and some behave differently depending on whether they are in parent position or child
- you can see what each command returns by looking into "Yielded" value inside the browser console

![Command chains]('./../chaining.png)

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

## Useful reading
* [my blog on how to avoid waiting in Cypress](https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it)
* [docs about chaining commands](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands)
* [how to write better command chains in Cypress (versions before v12)](https://filiphric.com/writing-better-command-chains-in-cypress)
