const { ref, uploadBytes } = require('firebase/storage');
//Models
const { Hotel } = require('../models/hotel.model');
const { User } = require('../models/user.model');
const { Reservation } = require('../models/reservation.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { storage } = require('../utils/firebase');

exports.getAllHotel = catchAsync(async (req, res, next) => {
  const hotel = await Hotel.findAll({});

  res.status(201).json({
    status: 'success',
    data: {
      hotel,
    },
  });
});

exports.createHotel = catchAsync(async (req, res, next) => {
  const { hotelName, description, services, ubication, price, reservationId } = req.body;
  // const { reservationId } = req.params;

  //Upload img to Cloud storage(firebase)
  // const imgRef = ref(storage, `imgs/${Date.now()}-${req.file.originalname}`);
  // const result = await uploadBytes(imgRef, req.file.buffer);

  const newHotel = await Hotel.create({
    hotelName,
    description,
    services,
    ubication,
    price,
    reservationId,
    // imgUrl: result.metadata.fullPath
  });

  res.status(201).json({
    status: 'success',
    data: { newHotel },
  });
});
