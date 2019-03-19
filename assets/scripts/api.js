import {fetch} from 'wix-fetch'

export function getCIDLicense (licenseObj) {
  // check for required fields

  if (!licenseObj.subSellerId) return ('Error: subSellerId is missing')
  if (!licenseObj.email) return ('Error: email Field is missing')
  if (!licenseObj.sku) return ('Error: sku Field is missing')
  if (!licenseObj.merchantId) return ('Error: merchantId Field is missing')
  if (!licenseObj.merchantName) return ('Error: merchantName Field is missing')
  // create body object

  const data = {

    subSellerId: licenseObj.subSellerId,

    adminFirstName: licenseObj.firstName,

    adminLastName: licenseObj.lastName,

    adminEmail: licenseObj.email,

    sku: licenseObj.sku,

    merchantId: licenseObj.merchantId,

    merchantName: licenseObj.merchantName

  }
  // optional fields

  if (licenseObj.address) data.address = licenseObj.address
  if (licenseObj.zip) data.zip = licenseObj.zip
  if (licenseObj.state) data.state = licenseObj.state
  if (licenseObj.country) data.country = licenseObj.country
  if (licenseObj.phone) data.phone = licenseObj.phone

  // Middleware API URL (dev or prod)
  // dev var url = 'https://dev-acs-v1.cyberidlock.com/api/cidlicense';
  const url = 'https://acs-v1.endpointlock.com/api/cidlicense'
  // uncomment this to return the raw request body for debugging
  // return (JSON.stringify(data));
  // Run the API command
  const promise = fetch(url, {
    body: JSON.stringify(data),
    // cache: 'no-cache',
    // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Authorization': 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
      'X-AdvancedCyberSecurity-SellerId': 'acs-isgro',
      'content-type': 'application/json'
    },
    method: 'POST',
    // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, cors, *same-origin
    // redirect: 'follow', // *manual, follow, error
    // referrer: 'no-referrer', // *client, no-referrer
  })

    .then(function (response) {
      // gotta return twice because stupid promises
      return (response.json())
    })
    .catch(function (error) {
        console.log('Error during post')
        return ('Error: The API Call Failed.')
    })
  return (promise)
}
