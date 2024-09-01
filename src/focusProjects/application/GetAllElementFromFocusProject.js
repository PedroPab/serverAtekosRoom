import FindFilterFocusElement from "../../focusElement/application/FindFilterFocusElement.js";
import FindFocusProject from "./FindFocusProject.js";

class GetAllElementFromFocusProject {
  constructor({
    focusProjectRepository,
    focusElementRepository
  }) {
    this.focusProjectRepository = focusProjectRepository;
    this.focusElementRepository = focusElementRepository;
    this.findFocusProject = new FindFocusProject({ focusProjectRepository });
    this.getFilterFocusElement = new FindFilterFocusElement({ focusElementRepository });
  }
  async execute({ focusProjectId, page }) {
    try {
      const focusProject = await this.findFocusProject.execute(focusProjectId);

      const filter = {
        key: 'focusProjectId',
        value: focusProjectId,
        option: "=="
      }
      const elements = await this.getFilterFocusElement.execute(filter);

      return elements;
    } catch (error) {
      throw error;
    }
  }
}

export default GetAllElementFromFocusProject;