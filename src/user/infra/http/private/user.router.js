const { Router } = require("express");

module.exports = function ({ userController }) {
  const router = Router();

  router.get("/search", userController.findAll.bind(userController));
  router.post("/create", userController.create.bind(userController));

  return router;
};
