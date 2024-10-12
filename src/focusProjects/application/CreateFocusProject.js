import FocusProject from '../domain/models/FocusProjectModel.js'

class CreateFocusProject {
  constructor({
    focusProjectRepository,
  }) {
    this.focusProjectRepository = focusProjectRepository
  }
  async execute({ id, ...data }) {
    try {
      return await this.retrieveOrCreateFocusProject(id, data)
    } catch (error) {
      throw error
    }
  }
  async retrieveOrCreateFocusProject(id, data) {
    try {
      const focusProjectFind = await this.getFocusProject(id)
      if (focusProjectFind) {
        throw new Error(`Ya existe un proyecto con ese ID ${id}`)
      }
      const focusProjectCreated = await this.createFocusProject({ id, data })
      return focusProjectCreated
    } catch (error) {
      throw error
    }
  }
  async getFocusProject(id) {
    try {
      return await this.focusProjectRepository.getById(id)
    } catch (error) {
      return undefined
    }
  }
  async createFocusProject({ id, data }) {
    try {
      const rta = new FocusProject({ id, ...data })
      return await this.focusProjectRepository.save(rta.id, rta)
    } catch (error) {
      throw error
    }
  }
}

export default CreateFocusProject