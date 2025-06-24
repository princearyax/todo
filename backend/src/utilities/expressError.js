// utils/AppError.js
class expressError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "expressError";
  }
}

export default expressError;
