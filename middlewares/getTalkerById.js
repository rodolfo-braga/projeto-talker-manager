const fs = require('fs').promises;

const fileName = 'talker.json';

function getAllTalkerById(req, res) {
  const { id } = req.params;
  fs.readFile(fileName, 'utf8')
    .then((data) => {
      const talkerRequested = JSON.parse(data).find((talker) => `${talker.id}` === id);
      if (!talkerRequested) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
      }
        res.status(200).json(talkerRequested);
    })
    .catch((err) => {
      console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
      process.exit(1);
    });
}

module.exports = getAllTalkerById;
