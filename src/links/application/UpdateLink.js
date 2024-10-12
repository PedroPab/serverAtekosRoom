import Link from '../domain/Link.js'

class UpdateLink {
  constructor({ linkRepository }) {
    this.linkRepository = linkRepository
  }

  async execute(id, data) {
    const link = await this.linkRepository.getById(id)
    const updatedLink = { ...link, ...data }
    const newLink = new Link(updatedLink)
    return this.linkRepository.update(newLink)
  }
}
export default UpdateLink
