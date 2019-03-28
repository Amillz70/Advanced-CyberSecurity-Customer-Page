'use strict'

const config = require('./config.js')

const newCustomer = (customerData) => {
  customerData.sku = 'CYBERC_A'
  console.log(customerData)

  return fetch(config.apiUrl, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
      'X-AdvancedCyberSecurity-SellerId': 'acs-isgro'
    }),
    body: JSON.stringify(customerData)
  })
    .then(response => response.json())
}

console.log(fetch)

// const newCustomer = (customerData) => {
//   customerData.sku = 'CYBERC_A'
//   Authorization: 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR'
//   Content-Type: 'application/json'
//   'X-AdvancedCyberSecurity-SellerId': 'acs-isgro'
//    body: JSON.stringify(customerData)
// }
//
//   axios({
//     method: 'POST',
//     url: config.apiUrl,
//     data: {
//       newCustomer
//     }
//   })
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

module.exports = {
  newCustomer
}
