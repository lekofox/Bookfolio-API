import { Sequelize } from 'sequelize';
import Model from './baseModel';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.STRING
        },
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        synopsis: Sequelize.STRING,
        publishingCompany: Sequelize.STRING,
        publishDate: Sequelize.DATE,
        pageNumber: Sequelize.INTEGER,
        rating: Sequelize.INTEGER,

      },
      {
        sequelize,
        underscored: true,
        // Soft Delete set to true
        tableName: 'Books',
      },
    );
    return this;
  }
}

export default Book;
