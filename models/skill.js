let skills = [
  { id: 1, name: 'JavaScript', description: 'Web development' },
  { id: 2, name: 'Python', description: 'Web development, and maths' },
  { id: 3, name: 'node.js', description: 'Web development with express' },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
