const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const CountryModel = require('../../../src/models/country.model');

describe('O model de Country', () => {
  const Country = CountryModel(sequelize, dataTypes);
  const country = new Country();

  describe('possui o nome "Country"', () => {
    checkModelName(Country)('Country');
  });

  describe('possui as propriedades "name" e "initials"', () => {
    ['name', 'initials'].forEach(checkPropertyExists(country));
  });
});