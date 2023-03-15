const User = require('../models/User');

// Create-Read-Update-Delete

module.exports = {
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
        // res.send(`Creating user with your request: ${req.body}...`);
    },
    createFriend(req, res) {
        res.send(`Creating new friend at user ID ${req.params.userId}...`);
    },
    getUsers(req, res) {
        res.send('Finding all users...');
    },
    getSingleUser(req, res) {
        res.send(`Finding user by ID ${req.params.userId}...`);
    },
    updateUser(req, res) {
        res.send(`Updating user by ID ${req.params.userId}...`);
    },
    deleteUser(req, res) {
        res.send(`Deleting user and associated thoughts by ID ${req.params.userId}...`);
    },
    deleteFriend(req, res) {
        res.send(`Deleting friend ${req.params.friendId} at user ID ${req.params.userId}...`);
    }
};
