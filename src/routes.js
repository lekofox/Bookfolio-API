/* eslint-disable linebreak-style */
import { Router } from 'express';
import passport, { session } from 'passport';
import RegisterNewUser from './app/controllers/RegisterNewUser';
import passport from 'passport';
import Checking from './config/auth/checkingFunctions'
import LogoutUser from './app/controllers/LogoutUser'

const routes = new Router();

// Default Routes
routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Acesse https://documenter.getpostman.com/view/16508397/Tzm2Kdss para acompanhar a documentação da API',
  });
});

//Post Routes
routes.post('/v1/register', Checking.NotAuthenticated, RegisterNewUser.store)

routes.post('/v1/login', Checking.NotAuthenticated, passport.authenticate('local'), function(req, res){
  return res.status(200).json({
    message: "Usuário logado"}
  )
})


export default routes;
