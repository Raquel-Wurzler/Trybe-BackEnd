// Crie um servidor Node.js utilizando o framework Express.
const express = require('express');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

app.use(express.json());
app.use(movieRoutes);

module.exports = app;
