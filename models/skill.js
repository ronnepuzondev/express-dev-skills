const skills = [
  { id: 125223, skill: "HTML"},
  { id: 127904, skill: "CSS"},
  { id: 139608, skill: "Javascript"},
  { id: 139608, skill: "Node.JS"},
  { id: 139608, skill: "Express.JS"},
  { id: 139608, skill: "MongoDB - in progress"}
];

module.exports = {
  getAll,
  getOne,
  deleteOne,
  create,
  update
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

function update(id, skill) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(idx, 1, skill);
}