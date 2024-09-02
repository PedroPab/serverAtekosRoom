import generateId from "../../utilsShare/generateIds.js";
import FocusElement from "../domain/models/FocusElementModel.js";
import MEDIA_TYPES_FOCUS_ELEMENT from "../domain/models/mediaType/index.js";

class CreateFocusElement {
  constructor({
    focusElementRepository,
    createImg,
  }) {
    this.focusElementRepository = focusElementRepository;
    this.typeMedia = MEDIA_TYPES_FOCUS_ELEMENT
    this.createImage = createImg;
  }
  async execute({ id, data }) {
    try {
      return await this.retrieveOrCreateFocusElement(id, data);
    } catch (error) {
      throw error;
    }
  }
  async retrieveOrCreateFocusElement(id, data) {
    try {
      if (!id) {
        id = generateId();
      }
      const focusElementFind = await this.getFocusElement(id)
      if (focusElementFind) {
        throw new Error('Error creating focus element');
      }
      //según el tipo de elemento crearemos un proceso diferente
      const elementPure = await this.createElementPureByType(data)
      const dataElement = {
        ...data,
        elementPureId: elementPure.id
      }
      const focusElementCreated = await this.createFocusElement({ id, data: dataElement });

      return focusElementCreated;
    } catch (error) {
      throw error;
    }
  }
  async createElementPureByType(data) {
    //según el tipo de elemento crearemos un proceso diferente
    switch (data.type) {
      case this.typeMedia.img:
        return await this.createImage.execute({ id: data.id, data });
      case this.typeMedia.video:
        return await this.createVideo(data);
      case this.typeMedia.text:
        return await this.createText(data);
      case this.typeMedia.link:
        return await this.createLink(data);
      default:
        throw new Error('Invalid type of media');
    }
  }
  async getFocusElement(id) {
    try {
      return await this.focusElementRepository.getById(id);
    } catch (error) {
      return undefined
    }
  }
  async createFocusElement({ id, data }) {
    try {
      const rta = new FocusElement({ id, ...data });
      return await this.focusElementRepository.save(rta.id, rta);
    } catch (error) {
      throw error;
    }
  }
}

export default CreateFocusElement