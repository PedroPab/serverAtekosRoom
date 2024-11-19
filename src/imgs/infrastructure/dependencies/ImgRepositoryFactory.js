import ENV from '../../../config/dotEnv.js'
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
	default:
		Repository = ImgFirebaseRepository
		break
}

export default Repository

