//Models
const { Reservation } = require('../models/reservation.model');
const { Hotel } = require('../models/hotel.model');
const { Invoice } = require('../models/invoice.model');
const { Payment } = require('../models/payment.model');
const { Permanence } = require('../models/permanence.model');
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

exports.getAllReservation = catchAsync(async (req, res, next) => {
  const reservation = await Reservation.findAll({
    where: { status: 'active' },
    include: [
      { model: User, attributes: { exclude: ['password'] } },
      { model: Invoice },
      { model: Payment },
      { model: Permanence },
      { model: Hotel },
    ],
  });

  res.status(201).json({
    status: 'success',
    data: {
      reservation,
    },
  });
});

exports.createReservation = catchAsync(async (req, res, next) => {
  const { paymentStatus, userId, hotelId, invoiceId, paymentId, permanenceId } = req.body;

  const newReservation = await Reservation.create({
    paymentStatus,
    userId: userId,
    hotelId: hotelId,
    invoiceId: invoiceId,
    paymentId: paymentId,
    permanenceId: permanenceId,
  });

  res.status(201).json({
    status: 'success',
    data: { newReservation },
  });
});

exports.pendingReservation = catchAsync(async (req, res, next) => {
  const { paymentStatus, userId, hotelId, invoiceId, paymentId, permanenceId } = req.body;

  const pendingReservation = await Reservation.create({
    paymentStatus,
    userId: userId,
    hotelId: hotelId,
    invoiceId: invoiceId,
    paymentId: paymentId,
    permanenceId: permanenceId,
  });

  res.status(201).json({
    status: 'success',
    data: { pendingReservation },
  });
});

exports.deleteReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findOne({ where: { id: id } });

    if (!reservation) {
      res.status(404).json({
        status: 'error',
        message: 'cant delete this reservation, invalid ID',
      });
      return;
    }
    await reservation.destroy();

    res.status(201).json({
      status: 'succes',
      message: 'your reservation was removed',
    });
  } catch (error) {
    console.log(error);
  }
};
