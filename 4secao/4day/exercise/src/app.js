const express = require('express');
const ecoRoutes = require('./routes/ecoRoutes');

const app = express();

app.use(express.json());

app.use(ecoRoutes);

module.exports = app;
