const router = require('express').Router();
const {
    createUser,
    createFriend,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .post(createUser)
    .get(getUsers);

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends')
    .post(createFriend);

router.route('/:userId/friends/:friendId')
    .delete(deleteFriend);

module.exports = router;