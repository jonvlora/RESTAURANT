const { Model, DataTypes } = require('sequelize');
const db = require('../config/database');

class InventoryItem extends Model {}

InventoryItem.init({
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'InventoryItem',
  tableName: 'inventory'
});

module.exports = InventoryItem;
