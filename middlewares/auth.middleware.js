function authenticate(req, res, next) {
    // For now any request will pass the authentication
     var authenticated = true;
    // If authentication fails
    if (!authenticated) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    /// If authentication succeeds, call next() to proceed to the next middleware or route handler
    next();
}

module.exports = {
    authenticate,
};