import { Sequelize } from 'sequelize';
import Model from './baseModel';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          
        },
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        synopsis: Sequelize.STRING,
        publishingCompany: Sequelize.STRING,
        language: Sequelize.STRING,
        publishDate: Sequelize.DATE,
        pageNumber: Sequelize.INTEGER,
        rating: Sequelize.INTEGER,
        deletedAt:{type: Sequelize.DATE, defaultValue: null}

      },
      {
        sequelize,
                // Soft Delete set to true
        paranoid: true,
        tableName: 'books',
      },
    );
    return this;
  }

  static associate(models) {
    Book.belongsTo(models.Author, {foreignKey: 'author'})
    Book.belongsTo(models.BookGenre, { foreignKey: 'id', targetKey: 'book_id' });
    Book.belongsToMany(models.Genre, { through: 'books_genre' });
  }
}

export default Book;
