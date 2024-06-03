const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
    
})

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })
