import Link from '../domain/Link.js'

export default class CreateLink {
  constructor({ linkRepository }) {
    this.linkRepository = linkRepository
  }
  async execute(data) {
    const link = new Link(data)
    const linkCreated = await this.linkRepository.save(link)
    return linkCreated
  }
}
