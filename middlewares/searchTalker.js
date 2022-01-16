const fs = require('fs');

const fileName = 'talker.json';

function searchTalker(req, res) {
  const { q } = req.query;

  const talkersList = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  if (!q) return res.status(200).json(talkersList);

  const filteredTalkers = talkersList.filter((talker) => talker.name.includes(q));

  res.status(200).json(filteredTalkers);
}

module.exports = searchTalker;
