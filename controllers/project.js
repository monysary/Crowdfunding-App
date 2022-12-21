const project = require('express').Router();
const { Project } = require('../models');

project.get('/:id', async (req, res) => {
  try {
    const projectInfo = await Project.findByPk(req.params.id, {
      include: [{'id',
            'name',
            'description',
            `date_created`,
            `needed_funding`,}],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = project;
