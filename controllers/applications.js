// controllers/applications.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// we will build out our router logic here
//the below forward slash represents /users/userID/application
//change logic to add error handling
router.get('/', async (req, res) => {
    try {
        res.render('applications/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;
