import { Sequelize } from 'sequelize';
import Model from './baseModel';

class BookGenre extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        book_id: Sequelize.INTEGER,
        genre_id: Sequelize.INTEGER,
        book_title: Sequelize.STRING,
        genre_name: Sequelize.STRING,
        deletedAt:{type: Sequelize.DATE, defaultValue: null}


      },
      {
        sequelize,
        underscored: false,
        tableName: 'books_genre',
      },
    );
    return this;
  }

  static associate(models) {
    BookGenre.hasMany(models.Book, { foreignKey: 'id', targetKey: 'book_id' });
    BookGenre.hasMany(models.Genre, { foreignKey: 'id', targetKey: 'genre_id' });
  }
}

export default BookGenre;

