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

        const licenseObj = {
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

        let promise = getCIDLicense(licenseObj)

        promise.then(function(results) {
            //stupid javascript
            if(results && results.status){
                if(results.status == 200 || results.status == 201){
                    console.log('Response Status Code: ' + results.status)
                    console.log('Successfully sold license')
                    $w('#successMessage').show()
                }
                else{
                    console.log('API responded with an error')
                    console.log('Status Code: ' + results.status)
                    console.log('Error Message: ' + results.error.message)
                    $w('#errorMessage').show()
                }
            }
            else{
                console.log('Error: Occurred before sending API call')
                console.log(results)
                $w('#errorMessage').show()
      }
    })
  }
})
