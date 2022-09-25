const express = require('express');

const { getAllPermanence, createPermanence } = require('../controllers/permanence.controller');

const router = express.Router();

router.get('/', getAllPermanence);
router.post('/create', createPermanence);

module.exports = { permanenceRouter: router };
