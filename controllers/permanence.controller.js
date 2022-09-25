//Models
const { Permanence } = require('../models/permanence.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

exports.getAllPermanence = catchAsync(async (req, res, next) => {
  const permanence = await Permanence.findAll({});
  res.status(201).json({
    status: 'success',
    data: {
      permanence,
    },
  });
});

exports.createPermanence = catchAsync(async (req, res, next) => {
  const { checkIn, checkOut, adults, children, reservationId } = req.body;

  const newPermanence = await Permanence.create({
    checkIn,
    checkOut,
    adults,
    children,
    reservationId: reservationId,
  });

  res.status(201).json({
    status: 'success',
    data: { newPermanence },
  });
});
