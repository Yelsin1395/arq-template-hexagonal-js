class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  create(input) {
    return this.userRepository.create(input);
  }
}

module.exports = UserService;
