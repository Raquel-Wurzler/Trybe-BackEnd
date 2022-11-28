// src/models/address.model.js

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'addresses',
    underscored: true, // serve para tratar camelCase e snake_case
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee, // belongsTo está recebendo a chave estrangeira
      { foreignKey: 'employeeId', as: 'employees' }); // em uma pesquisa que usa esse relacionamento, esse será o nome da chave "employees"
  };

  return Address;
};