//mongodb routes for local and heroku

var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  'mongodb://localhost:27017/remembrall')



// module.exports.Remembrall = require('../controllers/auth')