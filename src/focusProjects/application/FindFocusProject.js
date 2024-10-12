class FindFocusProject {
  constructor({
    focusProjectRepository,
  }) {
    this.focusProjectRepository = focusProjectRepository
  }
  async execute(id) {
    try {
      return await this.focusProjectRepository.getById(id)
    } catch (error) {
      throw error
    }
  }
}

export default FindFocusProject