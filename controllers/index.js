const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute.js');
const profileRoute = require('./profile.js');
const projectRoute = require('./project.js');

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/profile', profileRoute);
router.use('/project', projectRoute);

module.exports = router;
