'use strict'

const config = require('./config.js')

const newCustomer = (customerData) => {
  customerData.sku = 'CYBERC_A'

  return fetch(config.apiUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Authorization': 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
      'X-AdvancedCyberSecurity-SellerId': 'acs-isgro',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customerData)
  })
}

module.exports = {
  newCustomer
}
