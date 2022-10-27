const skills = [
  { id: 125223, skill: "HTML"},
  { id: 127904, skill: "CSS"},
  { id: 139608, skill: "JAVASCRIPT"},
  { id: 139608, skill: "NODE.JS"},
];

module.exports = {
  getAll,
  getOne,
  deleteOne,
  create
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to a number
  return skills.find((skill) => skill.id === parseInt(id));
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 100000
  skills.push(skill)
}