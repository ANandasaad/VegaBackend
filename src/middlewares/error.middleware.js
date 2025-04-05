import AppError from "../errors/AppError.js";

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    error: err.error,
  });
};

export const handleJWTError = (err) => {
  return new AppError("Invalid token, please log in again", 401);
};

export const handleJWTExpiredError = (err) => {
  return new AppError("Your token has expired, please log in again", 401);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";
  const message = err.message || "Something went wrong!";

  sendErrorDev({ statusCode, status, message, error: err }, res);
};

export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export const notfound = (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
};
