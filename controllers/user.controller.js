const User = require('../models/user.model');
class UserController {

    static getAllUsers = async (req, res) => {
        try {
            const foundUser = await User.findAll();
            res.status(201).json(foundUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get users' });
        }
    }

    static createUser = async (req, res) => {
        try {
            const { name, email } = req.body;
            const newUser = await User.create({ name, email });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    };

    static getUserById = async (req, res) => {
        try {
            const id = req.params.id;
            const foundUser = await User.findByPk(id);
            res.status(201).json(foundUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get user' });
        }
    }

    // Add more methods for handling user-related functionality
}

module.exports = UserController;