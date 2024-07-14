const express = require('express');

const router1 = express.Router();

// @route  GET api/auth
// desc    Test route
// @access Public
router1.get('/',(req,res) => res.send('Auth route'));

module.exports = router1;