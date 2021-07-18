import Sequelize from 'sequelize';
import Model from './baseModel';

class Genre extends Model {
  static init(sequelize) {
    super.init({


      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
    }, {
      sequelize,
      modelName: 'genres',
    });
    return this;
  }
  static associate(models) {
    Genre.belongsTo(models.BookGenre, { foreignKey: 'id', targetKey: 'genre_id' });
    Genre.belongsToMany(models.Book, { through: 'books_genre' });
  }
}

export default Genre