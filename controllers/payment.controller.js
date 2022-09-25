//Models
const { Payment } = require('../models/payment.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

exports.getAllPayment = catchAsync(async (req, res, next) => {
  const payment = await Payment.findAll({});

  res.status(201).json({
    status: 'success',
    data: {
      payment,
    },
  });
});

exports.createPayment = catchAsync(async (req, res, next) => {
  const { creditOfDebit, reservationId } = req.body;

  const newPayment = await Payment.create({
    creditOfDebit,
    reservationId: reservationId,
  });

  res.status(201).json({
    status: 'success',
    data: { newPayment },
  });
});
