'use strict'

const config = require('./config.js')

const newCustomer = (customerData) => {
  return $.ajax({
    url: config.apiUrl,
    method: 'POST',
    headers: {
      Authorization: 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
      'X-AdvancedCyberSecurity-SellerId': 'acs-isgro',
      'content-type': 'application/json'
    },
    data: customerData,
    sku: 'CYBERC_A'
  })
}

module.exports = {
  newCustomer
}
