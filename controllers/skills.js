const Skill = require('../models/skill');

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'Developer Skills',
  });
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  if (skill) {
    res.render('skills/show', {
      skill,
      title: `${skill.name} Detail`,
    });
  } else {
    res.redirect('/skills');
  }
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};
