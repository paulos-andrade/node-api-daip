const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Handle the /users endpoint
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.authenticate, UserController.getAllUsers);
router.post('/users', UserController.createUser);
// Add more routes for the /users endpoint as needed

module.exports = router;