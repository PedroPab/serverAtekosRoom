class FocusProjectController {
  constructor({
    getAllFocusProjects,
    getIdFocusProject,
    getFilterFocusProjects,
    createFocusProject,
    updateFocusProject,
    deleteFocusProject,
    createFocusElementFromProject,
  }) {
    this.getAllFocusProjects = getAllFocusProjects;
    this.getIdFocusProject = getIdFocusProject;
    this.getFilterFocusProjects = getFilterFocusProjects;
    this.createFocusProject = createFocusProject;
    this.updateFocusProject = updateFocusProject;
    this.deleteFocusProject = deleteFocusProject;
    this.createFocusElementFromProject = createFocusElementFromProject;
  }

  async getAll(req, res) {
    try {
      const focusprojects = await this.getAllFocusProjects.execute();
      res.status(200).json(focusprojects);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const body = req.body
      const newFocusProject = await this.createFocusProject.execute(body);
      res.status(201).json(newFocusProject);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async createFocusElement(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const newFocusElement = await this.createFocusElementFromProject.execute({ focusProjectId: id, ...data });
      res.status(201).json(newFocusElement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default FocusProjectController;