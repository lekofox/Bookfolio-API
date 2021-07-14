const { Model } = require('sequelize');

class BaseModel extends Model {
  static init(schema, options) {
    super.init(
      {
        ...schema,
      },
      {
        ...options,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    );
  }
}

module.exports = BaseModel;
