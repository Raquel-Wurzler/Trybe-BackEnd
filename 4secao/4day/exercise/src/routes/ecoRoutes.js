const express = require('express');
const generateToken = require('../ultils/generateToken');
const { validateName } = require('../middleware/validateName');
const { validatePrice } = require('../middleware/validatePrice');
const { validateDescription } = require('../middleware/validateDescription');
const { validateCreatedAt } = require('../middleware/validateCreatedAt');
const { validateRating } = require('../middleware/validateRating');
const { validateDifficulty } = require('../middleware/validateDifficulty');
// const { validateAuth } = require('../middleware/validateAuth');

const router = express.Router();

const activities = [];

// Crie um endpoint POST com a rota '/activities' para adicionar novas atividades.
// Ela deve: Retornar o status 201 e uma mensagem de sucesso quando a atividade tiver
// sido inserida (formato json);
router.post(
  '/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
    const { name, price, description } = req.body;
    const newActivity = { name, price, description };
    activities.push(newActivity);
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  },
);

// Crie um endpoint POST com a rota /signup para cadastrar pessoas usuárias. Ela deve:
// Ter os campos email, password, firstName e phone obrigatoriamente;
// Caso os campos não sejam preenchidos, retornar o status 401 - Unauthorized e uma
// mensagem (formato json);
// Sugestão: { "message": "Campos ausentes!" }.
// Gerar um token aleatório válido;
// Retornar o status 200 e uma mensagem contendo o token (formato json);
// Sugestão: { token: '<token-aleatorio>' }.

router.post('/signup', (req, res) => {
  const {
    email, password, firstName, phone,
  } = req.body;
  if (!email || !password || !firstName || !phone) {
    res.status(401).send({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  res.status(201).json({ token });
});

module.exports = router;
