'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('authors',[ 
    {
      id:1,
      name: 'Neil Gaiman',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    
    },
    {
      id:2,
      name: 'W. Timothy Gallwey',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:3,
      name: 'Tim Harford',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:4,
      name: 'Benjamin Moser',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:5,
      name: 'Gil do Vigor',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:6,
      name: 'Dani Atkins',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:7,
      name: 'Victoria Aveyard',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:8,
      name: 'Guillherme del Toro e Cornelia Funke',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:9,
      name: 'David Levithan',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:10,
      name: 'Wendy Leigh',
      description: '',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('authors', null,{
   
  })
};
