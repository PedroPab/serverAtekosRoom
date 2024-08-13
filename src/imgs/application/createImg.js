import ImgArtikuz from "../domain/models/ImgModel.js";

class CreateImg {
  constructor({
    imgRepository
  }) {
    this.imgRepository = imgRepository;
  }

  async execute({ id, data }) {
    const img = new ImgArtikuz({
      id,
      ...data
    });
    return await this.imgRepository.save(img.id, img);
  }
}

export default CreateImg;