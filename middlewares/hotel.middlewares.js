// Models
const { Hotel } = require('../models/hotel.model');
const { User } = require('../models/user.model');
// Utils  
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

exports.hotelExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const hotel = await Hotel.findOne({
    where: { id, status: 'active' },
    include: [{ model: User, attributes: { exclude: ['password'] } }],
  });

  if (!hotel) {
    return next(new AppError(404, 'No hotel found with that ID'));
  }
  req.hotel = hotel;
  next();
});

exports.hotelOwner = catchAsync(async (req, res, next) => {
  const { currentUser, hotel } = req;

  if (hotel.userId !== currentUser.id) {
    return next(new AppError(403, 'You are not the owner of this hotel'));
  }

  next();
});
