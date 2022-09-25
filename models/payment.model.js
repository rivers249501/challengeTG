const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Payment = sequelize.define('payment', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  creditOfDebit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reservationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'active',
  },
});
module.exports = { Payment };
