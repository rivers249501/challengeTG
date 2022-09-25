const express = require('express');

const { getAllInvoice, createInvoice } = require('../controllers/invoice.controller');

const router = express.Router();

router.get('/', getAllInvoice);
router.post('/create', createInvoice);

module.exports = { invoiceRouter: router };
