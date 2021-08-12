import app from './app';
import connection from './config/connection';
import initialize from "./config/auth/passport" 
import passport from 'passport';

const connect = async () => {
  try {
    await initialize(passport)
    await connection.authenticate();
    console.log('Server running...');
  } catch (error) {
    console.log(error);
  }
};
connect();

app.listen(process.env.PORT || 3333);
