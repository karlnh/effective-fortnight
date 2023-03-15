const router = require('express').Router();

const {
    createThought,
    createReaction,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/')
    .post(createThought)
    .get(getThoughts);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;