'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

// document.querySelector('#firstname').addEventListener('invalid', function () {
//   // event.preventDefault()
//   this.setCustomValidity('This is not a 3 digit number')
// })
// document.querySelector('#firstname').addEventListener('submit', function () {
//   // e.preventDefault()
//   this.setCustomValidity('')
// })

// first name on submit
// document.getElementById('first-name').addEventListener('submit', functSubmit)
//
// function functSubmit (event) {
//   const msg = document.getElementById('firstname').value
//   alert(msg)
// }

// const ele = document.getElementById('first-name')
// if (ele.addEventListener) {
//   ele.addEventListener('submit', callback, false)  //Modern browsers
// } else if (ele.attachEvent) {
//   ele.attachEvent('onsubmit', callback)            //Old IE
// }

// document.querySelector('firstname').addEventListener('submit', function(e) {
//   if(!isValid) {
//     e.preventDefault()    //stop form from submitting
//   }
// })

// document.querySelector('firstname').addEventListener('invalid', function () {
//   this.setCustomValidity('This is not a 3 digit number')
// })
// document.querySelector('firstname').addEventListener('input', function () {
//   this.setCustomValidity('')
// })
