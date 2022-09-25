const express = require('express');

const {
  getAllReservation,
  createReservation,
  deleteReservation,
  pendingReservation,
} = require('../controllers/reservation.controllers');

const router = express.Router();

router.get('/', getAllReservation);

router.post('/create', createReservation);

router.post('/pending', pendingReservation);

router.delete('/:id', deleteReservation);

module.exports = { reservationRouter: router };
