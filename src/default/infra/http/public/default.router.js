const { Router } = require("express");

module.exports = function ({ defaultController }) {
  const router = Router();

  router.get("", defaultController.index.bind(defaultController));

  return router;
};
