'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onSubmit = function (event) {
  event.preventDefault()
  api.submit()
    .then(ui.submitSuccess)
    .catch(ui.submitFailure)
}

module.exports = {
  onSubmit
}
