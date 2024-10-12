class GetAllImg {
  constructor({
    imgRepository,
  }) {
    this.imgRepository = imgRepository
  }

  async execute() {
    try {
      return await this.imgRepository.getAll()
    } catch (error) {
      throw error
    }
  }
}

export default GetAllImg