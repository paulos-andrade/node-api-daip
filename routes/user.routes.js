const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Handle the /users endpoint
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/getAll', authMiddleware.authenticate, UserController.getAllUsers);
router.get('/getById/:id', authMiddleware.authenticate, UserController.getUserById);

router.post('/createUser', authMiddleware.authenticate, UserController.createUser);

router.put('/updateUser/:id', authMiddleware.authenticate, UserController.updateUser);

router.delete('/deleteUser/:id', authMiddleware.authenticate, UserController.deleteUser);

// Add more routes for the /users endpoint as needed

module.exports = router;