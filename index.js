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

// let email = document.getElementById('password')
// let repeatEmail = document.getElementById('confirm_password')
//
// function validatePassword(){
//   if(email.value != repeatEmail.value) {
//     repeatEmail.setCustomValidity("Emails Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }
//
// email.onchange = validateEmail
// repeatEmail.onkeyup = validateEmail
