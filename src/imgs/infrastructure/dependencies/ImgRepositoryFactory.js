import ENV from '../../../config/dotEnv.js'
import ImgCouchRepository from '../repository/ImgCouchRepository.js'
import ImgFirebaseRepository from '../repository/ImgFirebaseRepository.js'
import ImgLocalMapRepository from '../repository/ImgLocalMapRepository.js'

let Repository

switch (ENV.IMG_REPOSITORY) {
	case 'firebase':
		Repository = ImgFirebaseRepository
		break
	case 'local':
		Repository = ImgLocalMapRepository
		break
	case 'mongo':
		Repository = ImgLocalMapRepository
		break
	case 'couch':
		Repository = ImgCouchRepository
		break
	default:
		Repository = ImgFirebaseRepository
		break
}

export default Repository

