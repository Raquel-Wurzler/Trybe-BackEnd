// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const employee = await Employee.findAll({
    include: { model: Address, as: 'addresses' }, // A chave include traz a associação entre employee e address
  });

  return employee;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
};

// const getById = async (id) => {
//   const employee = await Employee.findOne({
//       where: { id },
//       include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],
//     });
//   return employee;
// } Eager Loading: tem a chave include, que sem a chave attributes traz tudo, com ela é possível manipular o que queremos que venha. No exemplo não queremos que tenha o "number"

module.exports = {
  getAll,
  getById,
};