const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Date extends Model {}

Date.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_end: {
      type: DataTypes.DATE,
      allowNull: false,
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
    modelName: 'Date'
  }
);

module.exports = Date;