import {Sequelize}  from 'sequelize';

import database from './database';
import BookGenre from '../app/models/bookgenre';
import Book from '../app/models/book';
import Genre from '../app/models/genre'
import User from '../app/models/user';
import Author from '../app/models/author';

const connection = new Sequelize(database);

// Model connections
BookGenre.init(connection)
Book.init(connection)
Genre.init(connection)
Author.init(connection)


User.init(connection)

// Associations between models
BookGenre.associate(connection.models)
Book.associate(connection.models)
Genre.associate(connection.models)
Author.associate(connection.models)


export default connection;
