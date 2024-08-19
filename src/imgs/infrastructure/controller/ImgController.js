class ImgController {
  constructor({
    getAllImgs,
    getIdImg,
    getFilterImgs,
    createImg,
    updateImg,
    deleteImg,
  }) {
    this.getAllImgs = getAllImgs;
    this.getIdImg = getIdImg;
    this.getFilterImgs = getFilterImgs;
    this.createImg = createImg;
    this.updateImg = updateImg;
    this.deleteImg = deleteImg;
  }

  async getAll(req, res) {
    try {
      const imgs = await this.getAllImgs.execute();
      res.status(200).json(imgs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      //agregamos la imagen  a la data
      const file = req.file;
      const id = file.name
      const data = {
        ...req.body,
        file,
      };
      const newImg = await this.createImg.execute({ id, data });
      res.status(201).json(newImg);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default ImgController;