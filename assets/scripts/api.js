'use strict'

const config = require('./config.js')

const newCustomer = (customerData) => {
  customerData.sku = 'CYBERC_A'
  console.log(customerData)
  const myHeaders = new Headers()

  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR')
  myHeaders.append('X-AdvancedCyberSecurity-SellerId', 'acs-isgro')

  return fetch(config.apiUrl, {
    method: 'POST',
    credentials: 'include',
    headers: myHeaders,
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

// new Headers({
//   'Content-Type': 'application/json',
//   'Authorization': 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
//   'X-AdvancedCyberSecurity-SellerId': `acs-isgro`
// })

module.exports = {
  newCustomer
}
