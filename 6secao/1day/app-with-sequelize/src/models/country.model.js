const CountryModel = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    initials: DataTypes.STRING,
  });

  return Country;
};

module.exports = CountryModel;