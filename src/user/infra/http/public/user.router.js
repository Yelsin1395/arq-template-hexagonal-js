const { Router } = require("express");

module.exports = function ({ userController }) {
  const router = Router();

  router.get("/search", userController.findAll.bind(userController));

  return router;
};
