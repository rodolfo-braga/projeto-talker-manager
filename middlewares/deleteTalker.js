const fs = require('fs');

const fileName = 'talker.json';

function deleteTalker(req, res) {
  const { id } = req.params;

  const talkersList = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  const talkerIndex = talkersList.findIndex((talker) => `${talker.id}` === id);

  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  talkersList.splice(talkerIndex, 1);

  fs.promises.writeFile(fileName, JSON.stringify(talkersList))
    .then(() => res.status(204).end())
    .catch((err) => {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });
}

module.exports = deleteTalker;
