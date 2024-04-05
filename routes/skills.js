const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.get('/:id', skillsController.show);
router.get('/new', skillsController.new);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete);

module.exports = router;
