
export class LinkController {
  constructor({
    createLink,
    getAllLinks,
    getLinkById,
    update
  })
  {
    this.createLink = createLink;
    this.getAllLinks = getAllLinks;
    this.getLinkById = getLinkById;
    this.update = update;
  }
}