const request = require('request')

const nearbyHospitals = (latitude,longitude,callback) =>{
    const url = 'https://api.foursquare.com/v2/venues/search?ll=' + latitude + ',' + longitude + '&units=f' + '&client_id=BW53A1YBQUEHMHZ50JCBSNPLI3QIIUWBUHGG52USWOKK43FA&client_secret=TRCNMYKBWJYM000M5EQSOUBB2KOM235DKX11NHUTFY3PUIBU&v=20120609&query=hospital,covid'
    
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined) 
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,body.response.venues)   
        }
    })
}

module.exports = nearbyHospitals