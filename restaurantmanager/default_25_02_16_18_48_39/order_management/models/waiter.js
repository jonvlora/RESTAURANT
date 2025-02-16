const { Model, DataTypes } = require('sequelize');
const db = require('../config/database');

class Waiter extends Model {}

Waiter.init({
  waiter_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shift: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Waiter',
  tableName: 'waiters'
});

module.exports = Waiter;
