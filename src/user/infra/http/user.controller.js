class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  findAll(req, res) {
    const result = this.userService.findAll();
    res.status(200).send(result);
  }

  create(req, res) {
    const { body } = req;
    const result = this.userService.create(body);
    res.status(201).send({ newId: result.id });
  }
}

module.exports = UserController;
