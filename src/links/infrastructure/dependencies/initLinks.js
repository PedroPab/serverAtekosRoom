//repository
import LinkLocalMapRepository from '../repository/LinkLocalMapRepository.js'
//use case
import CreateLink from '../../application/CreateLink.js'
import GetAllLinks from '../../application/GetAllLinks.js'
//controller
import LinksController   from '../controller/LinksController.js'


const linkRepository  = new LinkLocalMapRepository()

const createLink = new CreateLink({ linkRepository })
const getAllLinks = new GetAllLinks({ linkRepository })

const linkController = new LinksController({
  createLink,
  getAllLinks,
})

export default linkController
