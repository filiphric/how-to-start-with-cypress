Cypress.Commands.add('info', (displayName, db) => {

  Cypress.log({
    displayName,
    message: '\n',
    consoleProps: () => {
      return {
        'database': db
      }
    }
  });

});