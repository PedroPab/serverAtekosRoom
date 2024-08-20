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
      const nameFocusProject = `${Date.now()}-${req.file.originalname}`;

      const file = {
        buffer: req.file.buffer,
        name: nameFocusProject,
        mimetype: req.file.mimetype,
      };
      const id = file.name
      const data = {
        ...req.body,
        file,
      };
      const newFocusProject = await this.createFocusProject.execute({ id, data });
      res.status(201).json(newFocusProject);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default FocusProjectController;