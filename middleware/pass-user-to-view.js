const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : null;
    //anything we need to access in our templates GLOBALLY
    //can be added to res.locals
    //generating templates is part of the response
    next();
};

module.exports = passUserToView;