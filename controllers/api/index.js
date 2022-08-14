const router = require('express').Router();

const userRoutes = require('./user-routes');
const habitRoutes = require('./habit-routes');
const resultRoutes = require('./result-routes');
const dateRoutes = require('./date-routes');

router.use('/users', userRoutes);
router.use('/habits', habitRoutes);
router.use('/results', resultRoutes);
router.use('/dates', dateRoutes);

module.exports = router;