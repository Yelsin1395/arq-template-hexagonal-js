const express = require("express");
const errorMiddleware = require("../../middleware/error.middleware");
const notFoundMiddleware = require("../../middleware/notFound.middleware");

module.exports = function ({
  defaultRouterPublic,
  userRouterPrivate,
  userRouterPublic,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // middleware default
  apiRoutes.use(express.json()).use(express.urlencoded({ extended: false }));

  // prefix route
  router.use("/by/JYBGR", apiRoutes);

  // middleware setting
  router.use(errorMiddleware);
  router.use(notFoundMiddleware);

  // endpoints
  apiRoutes.use("/public/info", defaultRouterPublic);
  apiRoutes.use("/private/user", userRouterPrivate);
  apiRoutes.use("/public/user", userRouterPublic);

  return router;
};
