'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('genres',[ 
    {
      id:1,
      name: 'Fantasia',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:2,
      name: 'Auto-ajuda',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    },
    {
      id:3,
      name: 'Biografia',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    },
    {
      id:4,
      name: 'Romance',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    },
]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('genres', null,{
   
  })
};
