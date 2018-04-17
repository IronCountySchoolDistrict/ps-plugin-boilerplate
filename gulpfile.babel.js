import * as psTasks from 'gulp4-ps-tasks'

// Parse the exports gulp tasks from index.js
Object.keys(psTasks).forEach(key => {
  module.exports[key] = psTasks[key]
})
