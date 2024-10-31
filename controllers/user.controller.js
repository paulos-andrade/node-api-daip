const User = require('../models/user.model');
class UserController {

    static getAllUsers = async (req, res) => {
        try {
            const foundUser = await User.findAll();
            res.status(200).json(foundUser);
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
            if (!foundUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(foundUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get user' });
        }
    }


    static updateUser = async (req, res) => {
        try {
            const id = req.params.id;
            const { name, email } = req.body;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            user.name = name || user.name;
            user.email = email || user.email;

            await user.save();

            res.status(200).json({ message:'User updated', data:user });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    };

    static deleteUser = async (req, res ) => {
        try {
            const id = req.params.id;
            const deletedUserCount = await User.destroy({
                where: { id: id },
            });
            if (deletedUserCount === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json('User deleted');
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}


//add patch method

module.exports = UserController;