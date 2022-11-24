const { Country } = require('../models');

const getAll = async () => {
  const countries = await Country.findAll();

  return countries;
};

const getById = async (id) => {
  const countries = await Country.findByPk(id);

  return countries;
};

const createCountry = async (name, initials) => {
  const newCountry = await Country.create({ name, initials });

  return newCountry;
};

const updateCountry = async (id, name, initials) => {
  const [updatedCountry] = await Country.update(
    { name, initials },
    { where: { id } },
  );

  console.log(updatedCountry); // confira o que é retornado quando o user com o id é ou não encontrado;  
  return updatedCountry;
};

const deleteCountry = async (id) => {
  const country = await Country.destroy(
    { where: { id } },
  );

  console.log(country); // confira o que é retornado quando o user com o id é ou não encontrado;
  return country;
};

module.exports = {
  getAll,
  getById,
  createCountry,
  updateCountry,
  deleteCountry,
};
