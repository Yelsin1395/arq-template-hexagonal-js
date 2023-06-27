// app
const DefaultService = require("../app/default.service");

// infra
const DefaultController = require("./http/default.controller");
const defaultRouterPublic = require("./http/public/default.router");

// build
const defaultService = new DefaultService();
const defaultController = new DefaultController(defaultService);

module.exports = {
  defaultRouterPublic: defaultRouterPublic({ defaultController }),
};
