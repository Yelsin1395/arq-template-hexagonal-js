module.exports = function (req, res, next) {
  res.status(404).send({ status: 404, message: "RESOURCE_NOT_FOUND" });
};
