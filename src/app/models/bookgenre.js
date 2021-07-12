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
        genre_name: Sequelize.STRING,
        book_name: Sequelize.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'Book_Genre',
      },
    );
    return this;
  }

  static associate(models) {
    BookGenre.hasMany(models.Doctor, { foreignKey: 'crm', targetKey: 'doctor_crm' });
    BookGenre.hasMany(models.Specialization, { foreignKey: 'id' });
  }
}

export default BookGenre;
