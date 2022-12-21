const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
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

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
