class FocusProjectController {
  constructor({
    getAllFocusProjects,
    getIdFocusProject,
    getFilterFocusProjects,
    createFocusProject,
    updateFocusProject,
    deleteFocusProject,
  }) {
    this.getAllFocusProjects = getAllFocusProjects;
    this.getIdFocusProject = getIdFocusProject;
    this.getFilterFocusProjects = getFilterFocusProjects;
    this.createFocusProject = createFocusProject;
    this.updateFocusProject = updateFocusProject;
    this.deleteFocusProject = deleteFocusProject;
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
}

export default FocusProjectController;