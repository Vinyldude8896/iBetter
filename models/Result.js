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
    is_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    habit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'habit',
        key: 'id'
      }
    },
    date_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'date',
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