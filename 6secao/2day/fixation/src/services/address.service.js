// src/services/address.service.js

const { Address } = require('../models/');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ where: { employeeId } });

  return addresses;
}; // Essa função tem como responsabilidade buscar todos os endereços de acordo com o employee_id

module.exports = {
  getAllByEmployeeId,
}