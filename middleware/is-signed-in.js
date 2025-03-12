const isSignedIn = (req, res, next) => {
    if(req.session.user) return next();
    //if a user is signed in call the next MW funciton
    //otherwise redirect them to the sign in page
    res.redirect('/auth/sign-in');
}

module.exports = isSignedIn;