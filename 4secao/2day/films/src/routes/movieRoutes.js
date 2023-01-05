const express = require('express');
const { redingFiles } = require('../utils/readingFile');
const { writeFile } = require('fs').promises;
const path = require('path');

const moviePath = path.join(__dirname, '../movies.json');

const router = express.Router();

// Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.

router.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  try {
    const movies = await redingFiles();
    const filterMovies = movies.filter((item) => item.movie.includes(q));
    return res.status(200).json(filterMovies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

router.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await redingFiles();
    const filterMovies = movies.filter((movie) => movie.id === Number(id));
    res.status(200).json(filterMovies);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

router.get('/movies/', async (req, res) => {
  try {
    const movies = await redingFiles();
    res.status(200).json(movies);
  } catch (error) {
  res.status(400).send({ message: `Could not read. Error: ${error.message}`});
  }
});

// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

router.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await redingFiles();
    const newMovie = { id: movies[movies.length - 1].id + 1, movie, price };
    const allMovies = [...movies, newMovie];
    await writeFile(moviePath, JSON.stringify(allMovies));
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).send({ message: `Could not write. Error: ${error.message}`});
  }
})

// Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

router.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await redingFiles();
    const index = movies.findIndex((movie) => movie.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await writeFile(moviePath, updatedMovies);
    res.status(201).json(movies[index]);
  } catch (error) {
    res.status(404).send({ message: `Movie not found. Error: ${error.message}` });
  }
});

// Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.

router.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await redingFiles();
    const filterMovies = movies.filter((movie) => movie.id !== Number(id));
    await writeFile(moviePath, JSON.stringify(filterMovies));
    res.status(204).end();
  } catch (error) {
    res.status(404).send({ message: `Movie not found. Error: ${error.message}` });
  }
});

module.exports = router;
