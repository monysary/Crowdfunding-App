const profile = require('express').Router();
const withAuth = require('../helpers/auth.js');

profile.get('/', withAuth, async (req, res) => {
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
