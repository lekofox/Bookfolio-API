import Model from './baseModel';
import Sequelize from 'sequelize'

class User extends Model {
  static init(sequelize) {
  super.init({
    id: {
      primaryKey: true,
      type: Sequelize.STRING
    },
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    postalCode: Sequelize.STRING,
    readerClassification: Sequelize.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return this;
}
}

export default User