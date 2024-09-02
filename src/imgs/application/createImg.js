import generateId from "../../utilsShare/generateIds.js";
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

      // creo que deberíamos de revisar si ya existe una imagen con ese id
      if (!id) {
        id = generateId();
      }
      if (await this.imgRepository.exist(id)) {
        throw new Error('Ya existe una imagen con ese id');
      }

      //publicar imagen o guardar en algún lado
      const file = data.file;
      const buffer = file.buffer;
      const options = { fileName: id, buffer }
      const imgDataPublic = await this.publishImgRepository.publish(options);


      const img = new ImgArtikuz({
        id,
        ...data,
        urlPublic: imgDataPublic.urlPublic,
        urlPrivate: imgDataPublic.urlPrivate,
        dateCreate: new Date(),
        dateUpdate: new Date(),
      });
      return await this.imgRepository.save(img.id, img);
    } catch (error) {
      throw error;
    }
  }
}

export default CreateImg;