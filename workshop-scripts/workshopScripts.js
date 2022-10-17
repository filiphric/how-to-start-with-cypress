const { testSetupData } = require('./testSetupData.js')

module.exports.registerWorkshopScripts = (on) => {
  on('task', { testSetupData })
};