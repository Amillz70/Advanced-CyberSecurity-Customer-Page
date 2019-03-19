'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// $(() => {
import wixData from 'wix-data'
import wixLocation from 'wix-location'
import wixWindow from 'wix-window'
import {getCIDLicense} from 'backend/isgro-order'

$w.onReady(function () {

    if(wixWindow.rendering.renderCycle === 2) {
        //This part is to retrieve the data from the wix db
        const path = wixLocation.path;
        const query = wixLocation.query;
        let collectionName = 'Default';

        if ('collection' in query) {

            collectionName = query['collection'];

        }

        let objNew = {};

        if ('data' in query) {
            const obj = JSON.parse(atob(query['data']));

            for (const prop in obj) {
                const newProp = prop.replace('.', '');
                objNew[newProp] = obj[prop];
            }

            // console.log('Sending 123FormBuilder submitted data to WixCode');

            let dataSent = wixData.insert(collectionName, objNew);
        } else {
            console.log('No submission data received from 123FormBuilder');
        }

        //Uncomment to see db contents
        //console.log('contents of data from db:');
        //for (let item in objNew){
        //  console.log(item + ' =  ' + objNew[item]);
        //}

        //object to store parameters for sell license call

        let subseller = 'verizon1';

        if (objNew['Bundle Type'] ==  '3 Device EndpointLock'){
            subseller = 'verizon3';
        }

        const custEmail = objNew['Email'].toLowerCase();

        const licenseObj ={

            subSellerId: subseller,

            sku: 'CYBERC_A',

            firstName: objNew['First Name'],

            lastName: objNew['Last Name'],

            email: custEmail,

            merchantId: custEmail,

            merchantName: (objNew['First Name'] + ' ' + objNew['Last Name'])

        };

        //optional parameters

        if (objNew['Address']) licenseObj.address = objNew['Address'];

        if (objNew['Postal / Zip Code']) licenseObj.zip = objNew['Postal / Zip Code'];

        if (objNew['City']) licenseObj.city = objNew['City'];

        if (objNew['State']) licenseObj.state = objNew['State'];

        if (objNew['Country']) licenseObj.country = objNew['Country'];

        if (objNew['Phone']) licenseObj.phone = objNew['Phone'];

        // uncomment to see licenseObj contents
        // console.log('Contents of licenseObj:');
        // for (let value in licenseObj){
        //  console.log(value + ' =  ' + licenseObj[value]);
        // }
        // run the call

        let promise = getCIDLicense(licenseObj);

        promise.then(function(results) {
            //stupid javascript
            if(results && results.status){
                if(results.status == 200 || results.status == 201){
                    console.log('Response Status Code: ' + results.status);
                    console.log('Successfully sold license');
                    $w('#successMessage').show();
                }
                else{
                    console.log('API responded with an error');
                    console.log('Status Code: ' + results.status);
                    console.log('Error Message: ' + results.error.message);
                    $w('#errorMessage').show();
                }
            }
            else{
                console.log('Error: Occurred before sending API call');
                console.log(results);
                $w('#errorMessage').show();
      }
    })
  }
})


// Which references this code:
// Seperate file

// import {fetch} from 'wix-fetch';
//
// export function getCIDLicense(licenseObj) {
//
//
//     //check for required fields
//
//     if (!licenseObj.subSellerId)return ('Error: subSellerId is missing');
//
//     if (!licenseObj.email)return ('Error: email Field is missing');
//
//     if (!licenseObj.sku)return ('Error: sku Field is missing');
//
//     if(!licenseObj.merchantId)return ('Error: merchantId Field is missing');
//
//     if(!licenseObj.merchantName)return ('Error: merchantName Field is missing');
//
//     //create body object
//
//     var data = {
//
//         subSellerId: licenseObj.subSellerId,
//
//         adminFirstName: licenseObj.firstName,
//
//         adminLastName: licenseObj.lastName,
//
//         adminEmail: licenseObj.email,
//
//         sku: licenseObj.sku,
//
//         merchantId: licenseObj.merchantId,
//
//         merchantName: licenseObj.merchantName
//
//     };
//     //optional fields
//
//     if (licenseObj.address) data.address = licenseObj.address;
//
//     if (licenseObj.zip) data.zip = licenseObj.zip;
//
//     if (licenseObj.state) data.state = licenseObj.state;
//
//     if (licenseObj.country) data.country = licenseObj.country;
//
//     if (licenseObj.phone) data.phone = licenseObj.phone;
//
//     //Middleware API URL (dev or prod)
//     //dev var url = 'https://dev-acs-v1.cyberidlock.com/api/cidlicense';
//     var url = 'https://acs-v1.endpointlock.com/api/cidlicense';
//     //uncomment this to return the raw request body for debugging
//     //return (JSON.stringify(data));
//     //Run the API command
//     let promise = fetch(url, {
//         body: JSON.stringify(data),
//         //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         //credentials: 'same-origin', // include, same-origin, *omit
//         headers: {
//             'Authorization': 'Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR',
//             'X-AdvancedCyberSecurity-SellerId': 'acs-isgro',
//             'content-type': 'application/json'
//         },
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         //mode: 'no-cors', // no-cors, cors, *same-origin
//         //redirect: 'follow', // *manual, follow, error
//         //referrer: 'no-referrer', // *client, no-referrer
//         })
//
//         .then(function (response) {
//             //gotta return twice because stupid promises
//             return (response.json());
//         })
//         .catch(function (error) {
//             console.log('Error during post');
//             return ('Error: The API Call Failed.');
//         });
//     return (promise);
// })
