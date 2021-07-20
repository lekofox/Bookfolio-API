'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
        
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        field:'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
        
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authors');
  }
};