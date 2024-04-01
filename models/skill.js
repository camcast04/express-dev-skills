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
