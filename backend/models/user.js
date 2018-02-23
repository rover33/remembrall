const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

//on save encrypt password
UserSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if (err) {return next(err)}
    
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) {return next(err)}

            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) { return  callback(err)}

        callback(null, isMatch)
    })
}

let User = mongoose.model('User', UserSchema)

module.exports = User





