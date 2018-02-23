const router = require('express').Router(),
      request = require('request'),
      axios = require('axios');
      auth = require('../controllers/auth');


router.post('/signup', auth.signup);








module.exports = router