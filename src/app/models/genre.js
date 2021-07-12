import Sequelize from 'sequelize';
import Model from './baseModel';

class Genre extends Model {
  static init(sequelize) {
    super.init({


      id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: Sesquelize.STRING,
      description: Sequelize.STRING,
    }, {
      sequelize,
      modelName: 'Genre',
    });
    return this;
  }
}

export default Genre