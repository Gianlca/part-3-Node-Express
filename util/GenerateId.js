const generateId = (arr) => {
  const maxId = arr.length > 0 ? Math.max(...arr.map((n) => n.id)) : 0;
  return maxId + 1;
};

module.exports = generateId;
