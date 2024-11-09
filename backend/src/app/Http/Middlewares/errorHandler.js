const errorHandler = (error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message || "An error occurred";
  const data = error.data;
  res.status(status).json({ message: message, data: data });
};

module.exports = errorHandler;
