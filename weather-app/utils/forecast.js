const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=f27525cb58077d1151f33f61b2576dc5&query=' + latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service.', undefinded)
        } else if (body.error) {
            callback('Unable to find location.', undefinded)
        } else {
            callback(undefinded, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast