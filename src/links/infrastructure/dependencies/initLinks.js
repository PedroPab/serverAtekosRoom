//repository
// import LinkLocalMapRepository from '../repository/LinkLocalMapRepository.js'
// import LinkFirebaseRepository from '../repository/LinkFirebaseRepository.js'
import LinkFirebaseCacheRepository from '../repository/LinkFirebaseCacheRepository.js'

//use case
import CreateLink from '../../application/CreateLink.js'
import GetAllLinks from '../../application/GetAllLinks.js'
import GetIdLink from '../../application/GetIdLink.js'
import UpdateLink from '../../application/UpdateLink.js'
//controller
import LinksController   from '../controller/LinksController.js'


const linkRepository  = new LinkFirebaseCacheRepository()
linkRepository.initialize()

const createLink = new CreateLink({ linkRepository })
const getAllLinks = new GetAllLinks({ linkRepository })
const getLinkById = new GetIdLink({ linkRepository })
const updateById = new UpdateLink({ linkRepository })

const linkController = new LinksController({
	createLink,
	getAllLinks,
	getLinkById,
	updateById
})

export default linkController
