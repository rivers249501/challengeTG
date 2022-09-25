const express = require('express');

const { getAllHotel, createHotel } = require('../controllers/hotel.controller');

//middlewares
const { validateSession } = require('../middlewares/auth.middlewares');

const { upload } = require('../utils/multer');

const router = express.Router();

router.get('/', getAllHotel);
router.post('/create', createHotel);
router.use(validateSession);

module.exports = { hotelRouter: router };
