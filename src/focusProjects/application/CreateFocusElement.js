import FindFocusProject from "./FindFocusProject.js";
import CreateFocusElement from "../../focusElement/application/CreateFocusElement.js";

class CreateFocusElementFromProject {
  constructor({
    focusProjectRepository,
    focusElementRepository,
  }) {
    this.focusProjectRepository = focusProjectRepository;
    this.focusElementRepository = focusElementRepository;
    this.findFocusElement = new FindFocusProject({ focusProjectRepository });
    this.createFocusElement = new CreateFocusElement({ focusElementRepository });
  }
  async execute({ id, ...data }) {
    try {
      const focusProjectId = data.focusProjectId;

      const focusProjectFind = await this.findFocusElement.execute(focusProjectId)
      if (!focusProjectFind) {
        throw new Error('Error creating focus element');
      }

      return await this.createFocusElement.execute({ id, data });
    } catch (error) {
      throw error;
    }
  }
}

export default CreateFocusElementFromProject