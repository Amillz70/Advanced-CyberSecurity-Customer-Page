'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../lib/get-form-fields.js')

const onSubmit = function (event) {
  event.preventDefault()
  api.newCustomer()
    .then(ui.submitSuccess)
    .catch(ui.submitFailure)
}

module.exports = {
  onSubmit
}
