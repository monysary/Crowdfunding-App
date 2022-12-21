const project = require('express').Router();
const { Project } = require('../models');

project.get('/:id', async (req, res) => {
  try {
    const projectInfo = await Project.findByPk(req.params.id, {include: [{ }]})
  } catch (err) {
    res.status(500).json(err);
  }
});
