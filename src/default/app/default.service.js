const pkg = require("../../../package.json");

class DefaultService {
  constructor() {}

  index() {
    return {
      name: pkg.name.split("-").join(" ").toUpperCase(),
      author: pkg.author,
      description: pkg.description,
    };
  }
}

module.exports = DefaultService;
