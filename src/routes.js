/* eslint-disable linebreak-style */
import { Router } from 'express';
import Checking from './config/auth/checkingFunctions'
import LogoutUser from './app/controllers/User/LogoutUser'
import CreateBookController from './app/controllers/Book/bookCreate';
import bookList from './app/controllers/Book/bookList';
import RegisterNewUser from './app/controllers/User/RegisterNewUser';
import loginuser from './app/controllers/User/loginuser';

const routes = new Router();

// Default Routes
routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Acesse https://documenter.getpostman.com/view/16508397/Tzm2Kdss para acompanhar a documentação da API',
  });
});

//Post Routes
routes.post('/v1/register', Checking.NotAuthenticated, RegisterNewUser.store)

routes.post('/v1/login',loginuser.login)
routes.post('/v1/books', CreateBookController.store)

//DELETE Routes
routes.delete('/v1/logout', LogoutUser.User)
//GET Routes
routes.get('/v1/books', bookList.listAll)
routes.get('/v1/books/:id', bookList.listById)
routes.get('/v1/books/title/:title', bookList.listByTitles)
routes.get('/v1/books/genre/:genre', bookList.listByGenre)
routes.get('/v1/login/', Checking.Authenticated, loginuser.getinfo)


export default routes;
