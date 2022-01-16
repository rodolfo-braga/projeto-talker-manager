const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./middlewares/getAllTalkers');
const getAllTalkerById = require('./middlewares/getTalkerById');
const login = require('./middlewares/login');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalk = require('./middlewares/validateTalk');
const validateWatchedAt = require('./middlewares/validateWatchedAt');
const validateRate = require('./middlewares/validateRate');
const createTalker = require('./middlewares/createTalker');
const editTalker = require('./middlewares/editTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getAllTalkerById);

app.post('/login', login);

app.post('/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  createTalker);

app.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
  editTalker);

app.listen(PORT, () => {
  console.log('Online');
});
