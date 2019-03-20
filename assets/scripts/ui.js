'use strict'

const submitSuccess = function () {
  '#display-message'.html('test')
}

const submitFailure = function () {
  // individual failure notices?
  // if ('#firstname' === '') {
  //   $('#display-message').html('Please enter a First Name')
  // }
  '#display-message'.html('bad test')
}

module.exports = {
  submitSuccess,
  submitFailure
}
