const express = require('express');
const router = express.Router();
const user = require('./user.js');

router.get('/', function(req, res){
    res.send("Welcome to V1 API");
});

router.use('/users', user);

module.exports = router;