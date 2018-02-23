const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')


//create local strategy
const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    user.findOne({ email: email }, function(err, user){
        if (err) { return done(err)}
        if (!user) { return done(null, false)}

        
    })
})


//setup options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
  };



//tell passport to use this
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    User.findbyId(payload.sub, function(err, user){
        if (err) { return done(err, false)}

        if(user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
})

//tell passport to use strategy
passport.use(jwtLogin)