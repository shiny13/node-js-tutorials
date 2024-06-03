const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log('Error', error)
        }
        
        console.log('Data', data)
        forecast(data, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            
            console.log(location)
            console.log(forecastData)
        })
        
    })
}
