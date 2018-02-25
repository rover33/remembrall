const router = require('express').Router(),
      request = require('request'),
      axios = require('axios');
      auth = require('../controllers/auth');
      passportService = require('../services/passport');
      passport = require('passport')
      Appointment = require('../models/appointment')
      require('dotenv').config()



const tKey={
      "ACCOUNT_SID": process.env.ACCOUNT_SID,
      "AUTH_TOKEN": process.emitWarning.AUTH_TOKEN
}

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false})



router.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123' });
      });
router.post('/signin', requireSignin, auth.signin);
router.post('/signup', auth.signup);


//get appointments

router.get('/create', (req, res, next) =>{
      res.render('appointments/create', {
            timeZones: getTimeZones(),
            Appointment: new Appointment({name: '',
                                          phoneNumber: '',
                                          notification: '',
                                          time: ''
             })
      })
})




module.exports = router