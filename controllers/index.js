const router = require('express').Router();

// required roues as we need them
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');


// tell router to use these routes
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
