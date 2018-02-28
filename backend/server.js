const express = require('express');
const app = express();
const path=require('path')
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//app setup


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//db
let db = require('./models')


if(!process.env.DYNO) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });
}
//server static files in public
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/build')))
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });

//setting up routes
let router = require('./routes/routes')
app.use('/api', router)

    



//Server Setup
app.listen( process.env.PORT || 3000, ()=> 
console.log(`server is running on port ${process.env.PORT || 3000} yay!`))