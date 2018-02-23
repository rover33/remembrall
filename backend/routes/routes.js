const router = require('express').Router(),
      request = require('request'),
      axios = require('axios');
      auth = require('../controllers/auth');
      passportService = require('../services/passport');
      passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false });


router.get('/', requireAuth, function(req,res){
      res.send("hi")
})
router.post('/signup', auth.signup);









module.exports = router