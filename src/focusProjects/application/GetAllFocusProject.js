class GetAllFocusProject {
  constructor({
    focusProjectRepository,
  }) {
    this.focusProjectRepository = focusProjectRepository
  }
  async execute() {
    return await this.focusProjectRepository.getAll()
  }
}

export default GetAllFocusProject
