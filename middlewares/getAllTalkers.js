const fs = require('fs').promises;

const fileName = 'talker.json';

function getAllTalkers(_req, res) {
  fs.readFile(fileName, 'utf8')
    .then((data) => {
      if (data.length === 0) return res.status(200).json([]);
      res.status(200).json(JSON.parse(data));
    })
    .catch((err) => {
      console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
      process.exit(1);
    });
}

module.exports = getAllTalkers;
