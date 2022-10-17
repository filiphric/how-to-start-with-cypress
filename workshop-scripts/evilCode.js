export const cardsLoadRandomly = (delay) => {
  cy.intercept({
    url: /api\/cards\?listId=/,
    middleware: true,
  }, (req) => {
    req.reply(res => {
      res.delay = Math.floor(Math.random() * delay);
    })
  }).as('😈')
}

export const cardsLoadSlowly = (delay) => {
  cy.intercept({
    url: /api\/cards\?listId=/,
    middleware: true,
  }, ({ reply }) => {
    reply( (res) => {
      res.delay = delay
    })
  }).as('😈')
}