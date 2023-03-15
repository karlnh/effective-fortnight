const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

router.get("/", (req, res) => {
    res.send("Connected to API root.");
});

module.exports = router;