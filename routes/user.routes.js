const express = require('express');

const { getAllUsers, createUser, loginUser } = require('../controllers/user.controller');

const { validateSession } = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/', createUser);

router.post('/login', loginUser);

router.get('/all', getAllUsers);

router.use('/all', validateSession);

module.exports = { usersRouter: router };
