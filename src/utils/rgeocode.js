const request=require('request')

const rgeocode = (lat, lon,callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?key=64d1b84153b14319b1eaf8a638c09f6f&q=' + lat + '%2C' + lon + '&pretty=1'

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