const AppError = require('../utils/AppError');

const sendErrorDev = (err, res) => {
  console.log(err);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: 'Error',
      message: 'Something went wrong',
    });
  }
};

const handlingCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(400, message);
};
const handleDuplicateFieldsDB = (err) => {
  return new AppError(400, `Duplicate field value. Please use another value`);
};
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Validation error ${errors.join('. ')}`;
  return new AppError(400, message);
};

const handleJWTError = (err) => {
  const message = `Invalid Token. Please login again`;
  return new AppError(400, message);
};
const handleJWTExpireError = (err) => {
  const message = `Token Expired. Please login again`;
  return new AppError(400, message);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    if (error.name === 'CastError') error = handlingCastErrorDB(error);

    if (error.code === 11000) error = handleDuplicateFieldsDB(error);

    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);

    if (error.name === 'JsonWebTokenError') error = handleJWTError(error);

    if (error.name === 'TokenExpiredError') error = handleJWTExpireError(error);

    sendErrorProd(error, res);
  }
};
