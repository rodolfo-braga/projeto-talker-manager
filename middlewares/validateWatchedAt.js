const isDateValid = require('../utils/isDateValid');

function validateWatchedAt(req, res, next) {
  const { watchedAt } = req.body.talk;

  if (!isDateValid(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
}

module.exports = validateWatchedAt;
