const CountryService = require('../services/country.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const countries = await CountryService.getAll();
    return res.status(200).json(countries);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await CountryService.getById(id);
  
    if (!country) return res.status(404).json({ message: 'País não encontrado' });

    return res.status(200).json(country);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createCountry = async (req, res) => {
  try {
    const { name, initials } = req.body;
    const newCountry = await CountryService.createCountry(name, initials);

    return res.status(201).json(newCountry);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateCountry = async (req, res) => {
  try {
    const { name, initials } = req.body;
    const { id } = req.params;
    const updatedCountry = await CountryService.updateCountry(id, name, initials);

    if (!updatedCountry) return res.status(404).json({ message: 'País não encontrado' });

    return res.status(200).json({ message: 'País atualizado com sucesso!' });    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await CountryService.deleteCountry(id);

    return res.status(200).json({ message: 'País excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createCountry,
  updateCountry,
  deleteCountry,
};