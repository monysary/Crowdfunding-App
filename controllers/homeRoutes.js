const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbProjects = await Project.findAll({
      // include: [
      //   {
      //     model: Project,
      //     attributes: [
      //       'id',
      //       'name',
      //       'description',
      //       `date_created`,
      //       `needed_funding`,
      //     ],
      //   },
      // ],
    });

    const projects = dbProjects.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      projects,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
