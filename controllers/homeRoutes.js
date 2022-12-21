const home = require('express').Router();
const { Project } = require('../models');

home.get('/', async (req, res) => {
  try {
    const dbProjects = await Project.findAll({});

    const projects = dbProjects.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      projects,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

home.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = home;
