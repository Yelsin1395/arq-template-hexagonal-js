class UserRepository {
  constructor(userDb, user) {
    this.userDb = userDb;
    this.user = user;
  }

  findAll() {
    return this.userDb;
  }

  create(entry) {
    const user = new this.user({});

    user.id = String(new Date().getTime());
    user.email = entry.email;
    user.slackUserId = String(entry.name).trim() + "SlackId";

    this.userDb.push(user);

    return user;
  }
}

module.exports = UserRepository;
