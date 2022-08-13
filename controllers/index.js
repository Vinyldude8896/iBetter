const router = require('express').Router();

// required roues as we need them
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const habitRoutes = require('./dashboard-routes');


// tell router to use these routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/create-habit', habitRoutes);

module.exports = router;