import { Sequelize } from 'sequelize';
import Model from './baseModel';

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        deletedAt:{type: Sequelize.DATE, defaultValue: null}

      },
      {
        sequelize,
        tableName: 'authors',
      },
    );
    return this;
  }

  static associate(models) {
    Author.hasMany(models.Book, { foreignKey: 'id', targetKey:'author_id'});
  }
}

export default Author;
