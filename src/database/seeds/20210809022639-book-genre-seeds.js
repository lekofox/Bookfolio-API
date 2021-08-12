'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('books_genre',[ 
    {
      id:1,
      book_id: 1,
      genre_id: 1,
      genre_name: 'Fantasia',
      book_title: 'Coraline',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:2,
      book_id: 2,
      genre_id: 2,
      genre_name: 'Auto-ajuda',
      book_title: 'O jogo interior do Tênis',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:3,
      book_id: 3,
      genre_id: 1,
      genre_name: 'Fantasia',
      book_title: 'A garota que bebeu a lua',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:4,
      book_id: 4,
      genre_id: 2,
      genre_name: 'Auto-ajuda',
      book_title: 'Caos Criativo',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:5,
      book_id: 5,
      genre_id: 3,
      genre_name: 'Biografia',
      book_title: 'Sontag: vida e obra',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:6,
      book_id: 6,
      genre_id: 3,
      genre_name: 'Biografia',
      book_title: 'Tem que Vigorar!',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:7,
      book_id: 7,
      genre_id: 1,
      genre_name: 'Fantasia',
      book_title: 'A história de nós dois',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:8,
      book_id: 8,
      genre_id: 1,
      genre_name: 'Fantasia',
      book_title: 'A Rainha Vermelha',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:9,
      book_id: 9,
      genre_id: 1,
      genre_name: 'Fantasia',
      book_title: 'Labirinto do Fauno',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:10,
      book_id: 10,
      genre_id: 3,
      genre_name: 'Biografia',
      book_title: 'Clarice',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:11,
      book_id: 11,
      genre_id: 4,
      genre_name: 'Romance',
      book_title: 'Dois Garotos se Beijando',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    {
      id:12,
      book_id: 12,
      genre_id: 3,
      genre_name: 'Biografia',
      book_title: 'Bowie',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    
    },
    
]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('books_genre', null,{
   
  })
};
