'use strict'

let apiUrl
const apiUrls = {
  production: 'https://acs-v1.endpointlock.com/api/cidlicense',
  // development: 'http://localhost:4741'
  development: 'https://dev-v1.endpointlock.com/api/cidlicense'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
