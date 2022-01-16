const fs = require('fs');

const fileName = 'talker.json';

function editTalker(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkersList = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  const talkerIndex = talkersList.findIndex((talker) => `${talker.id}` === id);

  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  talkersList[talkerIndex] = { ...talkersList[talkerIndex], name, age, talk };

  fs.promises.writeFile(fileName, JSON.stringify(talkersList))
    .then(() => res.status(200).json(talkersList[talkerIndex]))
    .catch((err) => {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });
}

module.exports = editTalker;
