class GetAllFocusProject {
  constructor({
    focusProjectRepository,
  }) {
    this.focusProjectRepository = focusProjectRepository
  }
  async execute() {
    try {
      return await this.focusProjectRepository.getAll()
    } catch (error) {
      throw error
    }
  }
}

export default GetAllFocusProject