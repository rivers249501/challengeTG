//frameworks
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

//controllers
const { globalErrorHandler } = require('./controllers/error.controller');

//Routes
const { usersRouter } = require('./routes/user.routes');
const { hotelRouter } = require('./routes/hotel.routes');
const { invoiceRouter } = require('./routes/invoice.routes');
const { paymentRouter } = require('./routes/payment.routes');
const { permanenceRouter } = require('./routes/permanence.routes');
const { reservationRouter } = require('./routes/reservation.routes');

//util
const { AppError } = require('./utils/AppError');

//init server
const app = express();
//import json
app.use(express.json());

//max request/min = 5
app.use(
  rateLimit({
    windowMS: 60 * 1000,
    max: 5,
    message: 'Too many request from your IP address, please verify',
  }),
);

//Enable helmet
app.use(helmet());

//compression response for the browser
app.use(compression());

// to view the request in console
app.use(morgan('dev'));

//Enable cors
app.use('*', cors());

//Endpoints
app.use('/api/v1/user', usersRouter);
app.use('/api/v1/hotel', hotelRouter);
app.use('/api/v1/invoice', invoiceRouter);
app.use('/api/v1/payment', paymentRouter);
app.use('/api/v1/permanence', permanenceRouter);
app.use('/api/v1/reservation', reservationRouter);

//error server
app.use('*', (req, res, next) => {
  next(new AppError(404, 'not found this server.'));
});

//error Handler
app.use(globalErrorHandler);
//export
module.exports = { app };
