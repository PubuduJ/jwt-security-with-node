const {StatusCodes} = require("http-status-codes");

class ConflictError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.CONFLICT
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = {ConflictError, UnauthorizedError};
