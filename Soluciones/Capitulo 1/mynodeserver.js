/* const express = require('express')
const app = express()
const port = 3001

app.get('/temperature/:location_code', function (request, response) {
   const varlocation = request.params.location_code;
    weather.current(location, function (error, temp_f) {
        
    });
});

var server = app.listen(port, function () {
   console.log(`Listening on URL http://localhost:${port}`);
}) */


const express = require('express')
const app = new express()
const port = 4500

app.use(function(req, res, next){
   if (req.query.password !== "lapassword"){
      return res.status(402).send("No puedes entrar maldito perro")
   }
   console.log('Time: ', Date.now())
   next()
})

app.get("/", (req,res) => {
   return res.send("Hola world!");
});

app.listen(`${port}`, () => {
   console.log(`Listening at http://localhost:${port}`)
});