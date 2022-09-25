const express = require('express');

const { getAllPayment, createPayment } = require('../controllers/payment.controller');

const router = express.Router();

router.get('/', getAllPayment);
router.post('/create', createPayment);

module.exports = { paymentRouter: router };
