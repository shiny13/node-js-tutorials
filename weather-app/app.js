const request = require('postman-request')

const url = 'https://api.weatherstack.com/current?access_key=f27525cb58077d1151f33f61b2576dc5&query=london&units=m'

request({ url: url, json: true }, (error, response) => {
    //console.log(response)
    //const data = JSON.parse(response.body)
    console.log(response.body)
    console.log(response.body.current)
    console.log('It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
})

// mapbox access token: pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pv0G8ybW90MDFhazNxcnJ40TYydzJl0SJ9.njY7HvaalLEVhE0IghPTlw
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pv0G8ybW90MDFhazNxcnJ40TYydzJl0SJ9.njY7HvaalLEVhE0IghPTlw'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})
