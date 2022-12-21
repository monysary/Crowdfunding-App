const profile = require('express').Router();
const withAuth = require('../helpers/auth.js');
const { Project } = require('../models');

profile.get('/', withAuth, async (req, res) => {
  try {
    const userProjects = await Project.findAll( where: {
      user_id: req.session.user_id
    });

    const projects = userProjects.map((project) => project.get({ plain: true }));

    res.render('profile', projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = profile;
