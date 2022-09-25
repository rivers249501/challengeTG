const { sequelize } = require('../utils/database');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    email: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    password: true,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = { User };
