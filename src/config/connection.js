import { Sequelize } from 'sequelize';
import database from './database';
import Book from '../app/models/book';
import BookGenre from '../app/models/bookgenre';
import Genre from '../app/models/genre'
import User from '../app/models/user';

const connection = new Sequelize(database);

// Model connections
BookGenre.init(connection)
Book.init(connection)

Genre.init(connection)
User.init(connection)
// Associations between models

BookGenre.associate(connection.models)
Book.associate(connection.models)
Genre.associate(connection.models)


export default connection;
