//Models
const { Invoice } = require('../models/invoice.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

exports.getAllInvoice = catchAsync(async (req, res, next) => {
  const invoice = await Invoice.findAll({});

  res.status(201).json({
    status: 'success',
    data: {
      invoice,
    },
  });
});

exports.createInvoice = catchAsync(async (req, res, next) => {
  const { rfc, physicalormoral, direction, niforcif, cp, phone, reservationId } = req.body;

  const newInvoice = await Invoice.create({
    rfc,
    physicalormoral,
    direction,
    niforcif,
    cp,
    phone,
    reservationId: reservationId,
  });

  res.status(201).json({
    status: 'success',
    data: { newInvoice },
  });
});
