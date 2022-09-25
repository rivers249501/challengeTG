const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Invoice = sequelize.define('invoice', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  rfc: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  physicalormoral: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  direction: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  niforcif: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  cp: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true,
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

module.exports = { Invoice };
