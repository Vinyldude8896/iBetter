const router = require('express').Router();

// required roues as we need them
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const tableRoutes = require('./table-routes.js');

// tell router to use these routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/table', tableRoutes);

module.exports = router;