// Crie uma função de leitura do JSON com o modulo fs.
const { readFile } = require('fs').promises;
const path = require('path');

const moviePath = path.join(__dirname, '../movies.json');

const redingFiles = async () => {
  try {
    const movies = await readFile(moviePath, 'utf8');
    return JSON.parse(movies);
  } catch (error) {
    return console.error(error);
  }
};

module.exports = { redingFiles };
