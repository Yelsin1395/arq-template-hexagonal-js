class User {
  constructor({ id, email, slackUserId }) {
    this.id = id;
    this.email = email;
    this.slackUserId = slackUserId;
  }
}

module.exports = { User };
