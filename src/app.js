if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}


import express from 'express';
import routes from './routes';
import flash from 'express-flash'
import session from 'express-session'
import passport from 'passport';
import methodOverride from 'method-override'
import cors from 'cors'
import cookieParser from 'cookie-parser';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors({origin: process.env.client,credentials: true,}))
    this.server.use(express.json())
    this.server.use(function(req, res, next) {
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
      if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
   });
    this.server.use(express.urlencoded({extended: true}))
    this.server.use(flash())
    this.server.use(cookieParser())
    this.server.set("trust proxy", 1)
    this.server.use(session({
      secret: process.env.secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: '/',
        sameSite: 'none',
        secure: true,
        domain: process.env.domain,
        maxAge: 1000 * 60 * 48 
      }
    }))
    this.server.use(passport.initialize())
    this.server.use(passport.session())
    this.server.use(methodOverride('_method'))
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;