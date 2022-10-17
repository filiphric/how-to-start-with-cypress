# Plugins
- there’s a variety of plugins available on [Cypress docs](https://docs.cypress.io/plugins/directory), but you can also search in [npm directory](https://npmjs.com)

Most of the plugins follow a common pattern:

1. install the plugin by `npm install <plugin name>`
2. add some kind of import to `cypress/support/index.js` file
3. sometimes the plugin requires an import to `cypress/plugins/index.js` as well

Some awesome plugins out there enable you to:
- add new commands to the Cypress library
- do visual testing
- test emails
- set up custom test reporters
- use cucumber bdd
- filter tests by tags
- and much more

Some of my favourite plugins:
- [my plugin for testin API](https://github.com/filiphric/cypress-plugin-api)
- [Cypress ESLint Plugin](https://github.com/cypress-io/eslint-plugin-cypress)
- [cypress-grep plugin for grepping, tagging and filtering tests](https://github.com/cypress-io/cypress-grep)
- [Code coverage plugin for getting code coverage data from your test run](https://github.com/cypress-io/code-coverage)
- [Plugin for making accessibility checks during your tests](https://github.com/component-driven/cypress-axe)
- [Drag and drop plugin](https://github.com/4teamwork/cypress-drag-drop)
- [cypress-recurse will enable you to recursively run a set of commands](https://github.com/bahmutov/cypress-recurse)
- [great plugin for testing api that will show your API in browser](https://github.com/bahmutov/cy-api)
- [plugin for adding missing iframe support](https://gitlab.com/kgroat/cypress-iframe)
- [add events like hover, swipe etc using chrome devtools protocol](https://github.com/dmtrKovalenko/cypress-real-events)
- [visual testing by Applitools](https://applitools.com/tutorials/cypress.html)
- [testing emails using mailosaur](https://github.com/mailosaur/cypress-mailosaur)
- [restoring a browser session and omitting login](https://github.com/bahmutov/cypress-data-session)