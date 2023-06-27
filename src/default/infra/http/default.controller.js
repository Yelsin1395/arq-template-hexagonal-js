class DefaultController {
  constructor(defaultService) {
    this.defaultService = defaultService;
  }

  index(req, res) {
    const result = this.defaultService.index();
    res.status(200).send(result);
  }
}

module.exports = DefaultController;
