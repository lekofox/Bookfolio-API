import Model from './baseModel';
import {Sequelize}  from 'sequelize';


class User extends Model {
  static init(sequelize) {
  super.init({
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    postalCode: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    localidade: Sequelize.STRING,
    uf: Sequelize.STRING,
    bairro: Sequelize.STRING,
    readerClassification: Sequelize.INTEGER,
    deletedAt:{type: Sequelize.DATE, defaultValue: null}

  }, {
    sequelize,
    modelName: 'users',
    underscored: false
  });
  return this;
}
}

export default User