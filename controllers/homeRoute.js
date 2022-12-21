const home = require('express').Router();
const { Project, User } = require('../models');

home.get('/', async (req, res) => {
  try {
    const dbProjects = await Project.findAll({
      include: [
        {
          model: Project,
          attributes: [''],
        },
      ],
    });

    const projects = dbProjects.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      projects,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
