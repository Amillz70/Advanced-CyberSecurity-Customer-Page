'use strict'

const submitSuccess = function () {
  alert('Customer Successfully Created, a welcome letter has been sent to the email address provided.')
}

const submitFailure = function () {
  alert('Error. No account was created. Please check you entries and try again.')
}

module.exports = {
  submitSuccess,
  submitFailure
}
