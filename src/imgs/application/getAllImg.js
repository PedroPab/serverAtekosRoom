class GetAllImg {
  constructor({
    imgRepository,
  }) {
    this.imgRepository = imgRepository
  }

  async execute() {
    return await this.imgRepository.getAll()
  }
}

export default GetAllImg
