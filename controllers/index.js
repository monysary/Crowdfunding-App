const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const profileRoute = require('./profile.js');
const projectRoute = require('./project.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoute);
router.use('/project', projectRoute);

module.exports = router;
