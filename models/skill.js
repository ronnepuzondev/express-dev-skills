const skills = [
  { id: 125223, skill: "HTML", learned: true },
  { id: 127904, skill: "CSS", learned: true },
  { id: 139608, skill: "JAVASCRIPT", learned: true },
  { id: 139608, skill: "NODE.JS", learned: false },
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