// core
const UserDb = require("../core/domain/user.domain");
const { User } = require("../core/dto/user.interface");
const UserRepository = require("../core/user.repository");

// app
const UserService = require("../app/user.service");

// infra
const UserController = require("./http/user.controller");
const userRouterPrivate = require("./http/private/user.router");
const userRouterPublic = require("./http/public/user.router");

// build
const userRepository = new UserRepository(UserDb, User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

module.exports = {
  userRouterPrivate: userRouterPrivate({ userController }),
  userRouterPublic: userRouterPublic({ userController }),
};
