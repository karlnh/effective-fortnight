const User = require('../models/User');

// Create-Read-Update-Delete

module.exports = {
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    createFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: "No friend found with this ID"})
                : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({message: 'No user found with that ID'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
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
