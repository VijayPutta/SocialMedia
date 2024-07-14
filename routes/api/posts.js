const express = require('express');

const router2 = express.Router();

// @route  GET api/posts
// desc    Test route
// @access Public
router2.get('/',(req,res) => res.send('posts route'));

module.exports = router2;