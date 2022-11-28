'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Books', [
    {
      title: 'A culpa é das estrelas',
      author: 'John Green',
      pageQuantity: 120,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'O boi que guardava o sábado',
      author: 'Bradley Booth',
      pageQuantity: 208,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
