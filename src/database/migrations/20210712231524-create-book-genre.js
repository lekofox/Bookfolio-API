'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books_genre', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'books', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'genres', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        
      },
      genre_name: {
        type: Sequelize.STRING
      },
      book_title: {
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
    await queryInterface.dropTable('books_genre');
  }
};