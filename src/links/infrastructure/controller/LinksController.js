class LinksController {
  constructor({
    createLink,
    // getAllLinks,
    // getLinkById,
    // update
  })
  {

    this.createLink = createLink
    // this.getAllLinks = getAllLinks;
    // this.getLinkById = getLinkById;
    // this.update = update;
  }
  async create(req, res) {
    try {
      const data = req.body
      const link = await this.createLink.execute(data)
      res.status(201).send(link)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}

export default LinksController
