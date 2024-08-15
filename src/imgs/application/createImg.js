import ImgArtikuz from "../domain/models/ImgModel.js";

class CreateImg {
  constructor({
    imgRepository,
    publishImgRepository
  }) {
    this.imgRepository = imgRepository;
    this.publishImgRepository = publishImgRepository;
  }

  async execute({ id, data }) {
    try {
      //publicar imagen o guardar en algún lado
      const file = data.file;
      // creo que deberíamos de revisar si ya existe una imagen con ese id
      const options = { fileName: id, fileData: file }
      const imgDataPublic = await this.publishImgRepository.publish(options);

      const img = new ImgArtikuz({
        id,
        ...data,
        urlPublic: imgDataPublic.urlPublic,
        urlPrivate: imgDataPublic.urlPrivate,
      });
      return await this.imgRepository.save(img.id, img);
    } catch (error) {
      throw error;
    }
  }
}

export default CreateImg;