const request=require('request')

const rgeocode = (lat, lon,callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?key=f6b9431e7ad541da9e2a59069e188369&q=' + lat + '%2C' + lon + '&pretty=1'

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