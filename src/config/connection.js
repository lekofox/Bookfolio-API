import { Sequelize } from 'sequelize';
import database from './database';
import Book from '../app/models/book';
import BookGenre from '../app/models/bookgenre';
import Genre from '../app/models/genre'
import User from '../app/models/user';

const connection = new Sequelize(database);

// Model connections
Book.init(connection)
BookGenre.init(connection)
Genre.init(connection)
User.init(connection)
// Associations between models

export default connection;
