const request=require('request')

const rgeocode = (lat, lon,callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?key=0cbf976b6d1b48c59cbe1fe32a094b29&q=' + lat + '%2C' + lon + '&pretty=1'

        request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        } else {
            callback(undefined,{
                address: body.results[0].formatted
            })
        }
    })
}

module.exports = rgeocode