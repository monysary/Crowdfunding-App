const project = require('express').Router();
const { Project } = require('../models');

project.get('/:id', async (req, res) => {
  try {
    const projectInfo = await Project.findByPk(req.params.id);
    const project = projectInfo.get({ plain: true });
    res.render('homepage', project);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = project;
