const router = require('express').Router(),
      request = require('request'),
      axios = require('axios');
      auth = require('../controllers/auth');
      passportService = require('../services/passport');
      passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false})


router.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123' });
      });
router.post('/signin', requireSignin, auth.signin);
router.post('/signup', auth.signup);







module.exports = router