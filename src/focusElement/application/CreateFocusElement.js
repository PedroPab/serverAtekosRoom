import FocusElement from "../domain/models/FocusElementModel.js";

class CreateFocusElement {
  constructor({
    focusElementRepository,
  }) {
    this.focusElementRepository = focusElementRepository;
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
      const focusElementFind = await this.getFocusElement(id)
      if (focusElementFind) {
        throw new Error('Error creating focus element');
      }
      const focusElementCreated = await this.createFocusElement({ id, data });
      return focusElementCreated;
    } catch (error) {
      throw error;
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