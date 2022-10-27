// controllers/skills.js

// Should name the model in uppercase and singular

const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  delete: deleteSkill,
  new: newTodo,
  create,
  edit,
  update
};

function newTodo(req, res) {
  res.render('skills/new');
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

function create(req, res) {
  Skill.create(req.body)
  res.redirect('/skills')
}

function edit(req, res) {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id)
  })
  
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect('/skills');
}