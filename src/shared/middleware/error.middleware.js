module.exports = function (err, req, res, next) {
  if (err.code) {
    const httpStatus = err.status || 400;
    res.status(httpStatus);
    res.send({
      status: httpStatus,
      code: err.code,
      message: err.message,
      stack: err.stack,
      moreInfoError: JSON.stringify(err),
    });
  } else {
    res.status(500);
    res.send({
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
    });
  }
};
