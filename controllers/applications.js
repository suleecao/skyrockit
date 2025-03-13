// controllers/applications.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// we will build out our router logic here
//the below forward slash represents /users/userID/application
//change logic to add error handling
router.get('/', async (req, res) => {
    try {
        currentUser = await User.findById(req.session.user._id);

        res.render('applications/index.ejs', {
            applications: currentUser.applications,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


//create new applications
router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
})

router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.applications.push(req.body); //this changes the apps list in memory only not the DB
        console.log(req.body);
        await currentUser.save(); //this adds changes to the DB
        res.redirect(`/users/${currentUser._id}/applications`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})

// GET /users/:userId/applications/:applicationId
// controllers/applications.js

router.get('/:applicationId', async (req, res) => {
    try {
      // Look up the user from req.session (currently logged in)
      const currentUser = await User.findById(req.session.user._id);
      // Find the sub-document by the applicationId supplied from req.params
      const application = currentUser.applications.id(req.params.applicationId);
      // Render the show template, passing the application data in the context object
      res.render('applications/show.ejs', {
        application //if property name and variable name are same, shorten
      });
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/');
    }
  });
  

module.exports = router;
