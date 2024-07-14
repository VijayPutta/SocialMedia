const express = require('express');

const router3 = express.Router();

// @route  GET api/Profile
// desc    Test route
// @access Public
router3.get('/',(req,res) => res.send('Profile route'));

module.exports = router3;