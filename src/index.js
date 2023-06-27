const express = require("express");
const pkg = require("../package.json");
const {
  config: { PORT },
  sharedBroker,
} = require("./shared/infra/export");

function boostrap() {
  const app = express().use(sharedBroker);

  app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production") {
      const route = () => `http://localhost:${PORT}`;
      console.log(`Hello, your app is ready on ${route()}`);
      console.log("To shut it down, press <CTRL> + C at any time.");
      console.log("-------------------------------------------------------");
      console.log(`Environment  : ${process.env.NODE_ENV}`);
      console.log(`App name     : ${pkg.name}`);
      console.log(`Version      : ${pkg.version}`);
      console.log(`Author api   : ${pkg.author}`);
      console.log(`API Info     : ${route()}`);
      console.log("-------------------------------------------------------");
    } else {
      console.log(`${this._pkg.name} running on port ${PORT}`);
    }
  });
}

boostrap();
