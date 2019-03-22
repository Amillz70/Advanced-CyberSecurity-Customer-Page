'use strict'

const config = require('./config.js')

const newCustomer = (customerData) => {
  return $.ajax({
    url: config.apiUrl,
    method: 'POST',

    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR')
      xhr.setRequestHeader('X-AdvancedCyberSecurity-SellerId', 'acs-isgro')
    },
    datatype: 'json',
    data: customerData
  })
}

module.exports = {
  newCustomer
}
