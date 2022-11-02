const express = require('express');
const { mandatoryName, nameSize } = require('./middleware/validateName');
const { mandatoryPrice, valuePrice } = require('./middleware/validadePrice');

const app = express();

app.use(express.json());

const activities = [];

// Crie um endpoint POST com a rota '/activities' para adicionar novas atividades.
// Ela deve: Retornar o status 201 e uma mensagem de sucesso quando a atividade tiver
// sido inserida (formato json);
app.post('/activities', mandatoryName, nameSize, mandatoryPrice, valuePrice, (req, res) => {
  const { name, price, description } = req.body;
  const newActivity = { name, price, description };
  activities.push(newActivity);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
