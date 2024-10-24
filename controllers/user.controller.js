const User = require('../models/user.model');
class UserController {
    static getAllUsers(req, res) {
        // Fetch users data from your database or any other source
        const users = [
            // Sample user data
            { name: 'Paulo Andrade', email: 'pa@example.com' },
            { name: 'Adriani', email: 'adriani@example.com' },
        ];
                                //upgrade to select from database
        res.json({ users });
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
    // Add more methods for handling user-related functionality
}

module.exports = UserController;