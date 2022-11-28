// src/services/employee.service.js

const { Address, Employee } = require('../models/');
const Sequelize = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

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
// } EAGER LOADING: tem a chave include, que sem a chave attributes traz tudo, com ela é possível manipular o que queremos que venha. No exemplo não queremos que tenha o "number"

// ---------------------- Modo Errado -------------------------------
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const employee = await Employee.create({ firstName, lastName, age });

//   await Address.create({ city, street, number, employeeId: employee.id });
//   return employee;
// }; 
// Situação: temos um endpoint em que, em um mesmo formulário, precisamos preencher a tabela de pessoas empregadas e a tabela de endereço. Mas precisamos garantir a atomicidade, ou seja, precisamos cadastrar a pessoa e o endereço de uma vez e, caso alguma coisa falhe, precisamos reverter essa operação.
// --> O problema da operação acima é que, caso ocorra qualquer tipo de erro na operação de salvar o endereço no banco, a pessoa vai ficar cadastrada de forma inconsistente, pois o registro na tabela users foi concluído com sucesso. Para garantir que vamos salvar os dois objetos ou não vamos salvar nada, usamos o recurso de gerenciamento de transação do Sequelize.

// ----------- Modo Certo: Usando Unmanaged transactions ---------------

// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const t = await sequelize.transaction();
//   try {
//     // Depois executamos as operações
//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: t },
//     );

//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction: t },
//     );

//     // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
//     // Com isso, podemos finalizar a transação usando a função `commit`.
//     await t.commit();
//     return employee;
//   } catch (e) {
//     // Se entrou nesse bloco é porque alguma operação falhou.
//     // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
//     await t.rollback();
//     console.log(e);
//     throw e; // Jogamos o erro para a controller tratar
//   }
// };

// ----------- Modo Certo: Usando Managed transactions ---------------
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    });
    return result;
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};