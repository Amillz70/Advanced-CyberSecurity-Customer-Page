'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../lib/get-form-fields.js')

const onSubmit = function (event) {
  event.preventDefault()
  const customerData = getFormFields(event.target)
  console.log(customerData)
  api.newCustomer(customerData)
    .then(ui.submitSuccess)
    .catch(ui.submitFailure)
}

module.exports = {
  onSubmit
}
