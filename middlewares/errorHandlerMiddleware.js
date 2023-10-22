const {ConflictError, UnauthorizedError} = require("../errors/errors");
const {StatusCodes} = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof ConflictError || err instanceof UnauthorizedError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else {
    if (err.errors[0].message) return res.status(StatusCodes.BAD_REQUEST).json({ message: err.errors[0].message });
    else {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
  }
}

module.exports = errorHandlerMiddleware;
