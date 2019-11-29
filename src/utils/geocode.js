const request = require('request')

const geocode = (address, callback) => {
    const geo_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 
    + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibHVrYW11IiwiYSI6ImNrM2dseGpmbTAycDAzaXFscWh4OTdrbzMifQ.7ZyQ7k8NWrIU9STBnIMW5g'

    request( { url: geo_url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode
