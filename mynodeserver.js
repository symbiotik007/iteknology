const express = require('express')
const app = express()
const port = 3001

app.get('/temperature/:location_code', function (request, response) {
    const varlocation = request.params.location_code;
    weather.current(location, function (error, temp_f) {
        // ..
    });
});

var server = app.listen(port, function () {
    console.log(`Listening on URL http://localhost:${port}`);
})