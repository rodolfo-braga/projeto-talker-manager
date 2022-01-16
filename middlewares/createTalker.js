const fs = require('fs');

const fileName = 'talker.json';

function createTalker(req, res) {
  const { name, age, talk } = req.body;

  const talkersList = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  const newTalker = {
    id: talkersList.length + 1,
    name,
    age,
    talk,
  };

  talkersList.push(newTalker);

  fs.promises.writeFile(fileName, JSON.stringify(talkersList))
    .then(() => res.status(201).json(newTalker))
    .catch((err) => {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });
}

module.exports = createTalker;
