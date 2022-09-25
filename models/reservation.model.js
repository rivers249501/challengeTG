const { sequelize } = require('../utils/database');
const { DataTypes } = require('sequelize');

const Reservation = sequelize.define('reservation', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  invoiceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  permanenceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hotelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = { Reservation };
