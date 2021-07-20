'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('genres',[ 
    {
      id:1,
      name: 'épico',
      description: 'épico',
      created_at: "2016-01-01 00:00:00+00:00",
      updated_at: "016-01-01 00:00:00+00:00",
      deleted_at: null
    
    },
    {
      id:2,
      name: 'fantasia',
      description: 'fantasia',
      created_at: "2016-01-01 00:00:00+00:00",
      updated_at: "016-01-01 00:00:00+00:00",
      deleted_at: null
    },
]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('genres', null,{
   
  })
};
