const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Permanence = sequelize.define('permanence', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  checkIn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  adults: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  children: {
    type: DataTypes.INTEGER,
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
module.exports = { Permanence };
