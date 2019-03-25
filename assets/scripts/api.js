'use strict'

// const config = require('./config.js')

const newCustomer = (customerData) => {
  return $.ajax({
  //  url: config.apiUrl,
    url: 'https://acs-v1.endpointlock.com/api/cidlicense',
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
      'X-AdvancedCyberSecurity-SellerId': 'acs-isgro'
    },
    data: customerData
  })
}

module.exports = {
  newCustomer
}
