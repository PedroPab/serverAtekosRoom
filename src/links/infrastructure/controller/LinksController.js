class LinksController {
  constructor({
    createLink,
    getAllLinks,
    // getLinkById,
    // update
  })
  {

    this.createLink = createLink
    this.getAllLinks = getAllLinks
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
  async getAll(req, res) {
    try {
      const links = await this.getAllLinks.execute()
      res.status(200).send(links)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}

export default LinksController
