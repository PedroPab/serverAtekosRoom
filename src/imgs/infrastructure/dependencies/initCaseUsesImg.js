import CreateImg from '../../application/createImg.js'
import GetImg from '../../application/getImg.js'
import GetAllImg from '../../application/getAllImg.js'

//repository
import RepositoryImg from './ImgRepositoryFactory.js'
import RepositoryPublish from './PublishRepositoryFactory.js'

//repository para imágenes
const imgRepository = new RepositoryImg()
//repository para publicar imágenes
const publishImgRepository = new RepositoryPublish({})

//use cases
const createImg = new CreateImg({
	imgRepository,
	publishImgRepository
})

const getIdImg = new GetImg({
	imgRepository,
})

const getAllImgs = new GetAllImg({
	imgRepository,
})

export {
	createImg,
	getIdImg,
	getAllImgs,
}