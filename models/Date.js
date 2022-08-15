const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DateModel extends Model {}

DateModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'date'
  }
);

module.exports = DateModel;