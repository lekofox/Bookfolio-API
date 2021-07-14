/* eslint-disable linebreak-style */
import { Router } from 'express';
import RegisterNewUser from './app/controllers/RegisterNewUser';

const routes = new Router();

// Default Routes
routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Acesse https://documenter.getpostman.com/view/16508397/Tzm2Kdss para acompanhar a documentação da API',
  });
});

//Post Routes
routes.post('/v1/register', RegisterNewUser.store)


export default routes;
