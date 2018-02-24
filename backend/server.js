const express = require('express');
const app = express();
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//app setup


//set up body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//db
let db = require('./models')

//server static files in public
app.use(express.static('public'))

//setting up routes
let router = require('./routes/routes')
app.use('/api', router)
    



//Server Setup
app.listen(process.env.PORT || 3000, ()=> 
console.log(`server is running on port ${process.env.PORT || 3000}`))