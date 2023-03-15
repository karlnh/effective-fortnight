const { Thought, Reaction, User } = require('../models');

// Create-Read-Update-Delete

module.exports = {

    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: {thoughts: thought._id } },
                { new: true }
            );
        })
        .then((user) =>
            !user
                ? res.status(404).json({
                    message: "Thought created, but no user found",
                })
                : res.json("Created thought")
        );
    },

    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought found with this ID'})
                : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with this ID' })
                : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought found with this ID'})
                : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: "No thought found with this ID"})
                : User.findOneAndUpdate(
                    {thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                )    
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: "Thought found but no user found with this id"})
                : res.json({ message: "Thought successfully deleted"})
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    deleteReaction(req, res) {
        Reaction.findOneAndRemove({ _id: req.params.reactionId })
        .then((reaction) =>
        !reaction
            ? res.status(404).json({ message: "No reaction found with this ID"})
            : Thought.findOneAndUpdate(
                { reactions: req.params.reactionId },
                { $pull: { reactions: req.params.reactionId } },
                { new: true }
            )
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: "Reaction found but no thought found with this id"})
                : res.json({ message: "Thought successfully deleted"})
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
};