import { Sequelize } from 'sequelize';
import database from './database';


const connection = new Sequelize(database);

// Model connections

// Associations between models

export default connection;
