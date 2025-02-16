const { Model, DataTypes } = require('sequelize');
const db = require('../config/database');

class Sale extends Model {}

Sale.init({
  sale_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sale_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  waiter_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Sale',
  tableName: 'sales'
});

module.exports = Sale;
