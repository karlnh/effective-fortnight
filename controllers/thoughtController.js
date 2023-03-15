module.exports = {
    createThought(req, res) {
        res.send(`Creating thought with your request: ${req.body}`);
    },
    createReaction(req, res) {
        res.send(`Creating reaction at thought ${req.params.thoughtId}...`);
    },
    getThoughts(req, res) {
        res.send(`Finding all thoughts...`);
    },
    getSingleThought(req, res) {
        res.send(`Finding thought by ID ${req.params.thoughtId}...`);
    },
    updateThought(req, res) {
        res.send(`Updating thought by ID ${req.params.thoughtId}...`);
    },
    deleteThought(req, res) {
        res.send(`Deleting thought by ID ${req.params.thoughtId}...`);
    },
    deleteReaction(req, res) {
        res.send(`Deleting reaction by ID ${req.params.reactionId} at thought ID ${req.params.thoughtId}...`);
    }
};