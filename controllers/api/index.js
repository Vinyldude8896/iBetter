const router = require('express').Router();

const userRoutes = require('./user-routes');
const habitRoutes = require('./habit-routes');
const resultRoutes = require('./result-routes');


router.use('/users', userRoutes);
router.use('/habits', habitRoutes);
router.use('/results', resultRoutes);

module.exports = router;