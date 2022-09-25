// Models
const { Reservation } = require('../models/reservation.model');

// Utils
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

exports.reservationExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const reservation = await Reservation.findOne({
    where: { id, status: 'active' },
  });

  if (!reservation) {
    return next(new AppError(404, 'No reservation found with that ID'));
  }
  req.reservation = reservation;
  next();
});

exports.reservationOwner = catchAsync(async (req, res, next) => {
  const { currentUser, reservation } = req;
  next();
});
