const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model {}

Result.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    result: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    habit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'habit',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'result'
  }
);

module.exports = Result;