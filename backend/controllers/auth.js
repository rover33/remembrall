const User = require('../models/user');


exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password){
        return res.status(422).send({ error: "you must provide email and password"})
    }

    //see if user with email already exists
    User.findOne({ email: email }, function(err, existingUser){
        if (err) {return next(err)}

        //if user with email does exist return error
        if (existingUser){
            return res.status(422).send({ error: 'email in use'})
        }
        //if user does not exist creat it
        const user = new User ({
            email: email,
            password: password
        })
        //save user to db.
        user.save(function(err){
            if(err) {return next(err)}

            res.json({ success: true})
        })

    })

}