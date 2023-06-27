const sharedBroker = require("./broker/shared.broker");

// config
const config = require("./config");

// components
const { defaultRouterPublic } = require("../../default/infra/export");
const {
  userRouterPrivate,
  userRouterPublic,
} = require("../../user/infra/export");

module.exports = {
  config,
  sharedBroker: sharedBroker({
    defaultRouterPublic,
    userRouterPrivate,
    userRouterPublic,
  }),
};
