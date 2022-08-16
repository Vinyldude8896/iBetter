const router = require('express').Router();

// required roues as we need them
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const resetRoutes = require('./reset-routes');


// tell router to use these routes
router.use('/api', apiRoutes);
router.use('/reset', resetRoutes);
router.use('/', homeRoutes);

module.exports = router;