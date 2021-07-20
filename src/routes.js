/* eslint-disable linebreak-style */
import { Router } from 'express';
import CreateBookController from './app/controllers/Book/bookCreate';
import bookList from './app/controllers/Book/bookList';
import RegisterNewUser from './app/controllers/User/RegisterNewUser';

const routes = new Router();

// Default Routes
routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Acesse https://documenter.getpostman.com/view/16508397/Tzm2Kdss para acompanhar a documentação da API',
  });
});

//POST Routes
routes.post('/v1/register', RegisterNewUser.store)
routes.post('/v1/books', CreateBookController.store)

//GET Routes
routes.get('/v1/books', bookList.listAll)
routes.get('/v1/books/:id', bookList.listById)
routes.get('/v1/books/title/:title', bookList.listByTitles)
routes.get('/v1/books/genre/:genre', bookList.listByGenre)


export default routes;
