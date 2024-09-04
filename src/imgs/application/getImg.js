class GetImg {
  constructor({
    imgRepository,
  }) {
    this.imgRepository = imgRepository;
  }

  async execute(id) {
    try {
      if (!id) {
        throw new Error('Id is required');
      }
      return await this.imgRepository.getById(id);
    } catch (error) {
      throw error;
    }
  }
}

export default GetImg;