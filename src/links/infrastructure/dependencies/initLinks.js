//repository
import LinkLocalMapRepository from '../repository/LinkLocalMapRepository.js'
//use case
import CreateLink from '../../application/CreateLink.js'
//controller
import LinksController   from '../controller/LinksController.js'


const linkRepository  = new LinkLocalMapRepository()

const createLink = new CreateLink({ linkRepository })

const linkController = new LinksController({
  createLink,
})

export default linkController
