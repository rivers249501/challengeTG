//models
const { Hotel } = require('../models/hotel.model');
const { Invoice } = require('../models/invoice.model');
const { User } = require('../models/user.model');
const { Payment } = require('../models/payment.model');
const { Permanence } = require('../models/permanence.model');
const { Reservation } = require('../models/reservation.model');

const initModels = () => {
  // Reservation -- Invoice
  Invoice.hasOne(Reservation);
  Reservation.belongsTo(Invoice);

  // payment -- Reservation
  Payment.hasOne(Reservation);
  Reservation.belongsTo(Payment);

  //permanence -- Reservation
  Permanence.hasOne(Reservation);
  Reservation.belongsTo(Permanence);

  // User - permanence/estance
  User.hasMany(Permanence);
  Permanence.belongsTo(User);

  // reservation -- User
  User.hasMany(Reservation);
  Reservation.belongsTo(User);

  // hotel - reservation
  Hotel.hasMany(Reservation);
  Reservation.belongsTo(Hotel);

  // user -- hotel
  User.belongsToMany(Hotel, { through: Reservation });
  Hotel.belongsToMany(User, { through: Reservation });
};

module.exports = { initModels };
