class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class AppError extends Error {
  constructor(errorStatus, errorCode, message) {
    super(errorStatus, errorCode, message);

    this.name = "AppError";
    this.status = parseInt(errorStatus);
    this.code = errorCode;
    this.message = message;
  }
}

module.exports = AppError;
