const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { User } = require('../models/user.model');
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

dotenv.config({ path: './config.env' });

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, lastName, email, password, status } = req.body;

  let passwordHash = await bcryptjs.hash(password, 8);
  const user = await User.create({
    name: name,
    lastName: lastName,
    email: email,
    password: passwordHash,
  });

  user.password = undefined;

  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email: email, status: 'active' },
  });

  if (!user || !(await bcryptjs.compare(password, user.password))) {
    return next(new AppError(400, 'Credentials are invalid'));
  }

  const token = await jwt.sign(
    { id: user.id }, 
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );

  res.status(200).json({
    status: 'success',
    data: { token },
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
    where: { status: 'active' },
  });

  if (user.length === 0) {
    return next(new AppError(404, 'There are not users until'));
  }

  res.status(201).json({
    status: 'success',
    data: { user },
  });
});
