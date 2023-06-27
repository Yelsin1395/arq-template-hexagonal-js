const pkg = require("../../../package.json");

class DefaultService {
  constructor() {}

  index() {
    return {
      name: pkg.name.split("-").join(" ").toUpperCase(),
      author: pkg.author,
      // nodeEnv: process.env.NODE_ENV,
      // scope: process.env.APP_SCOPE,
      description: pkg.description,
    };
  }
}

module.exports = DefaultService;
