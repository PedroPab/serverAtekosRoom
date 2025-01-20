import ENV from '../../../config/dotEnv.js'

import FocusProjectLocalMapRepository from '../repository/LinkLocalMapRepository.js'
import FocusProjectFirebaseRepository from '../repository/LinkFirebaseRepository.js'

let Repository

console.log(`repository Links: ${ENV.LINKS_REPOSITORY}`)

switch (ENV.LINKS_REPOSITORY) {
	case 'firebase':
		Repository = FocusProjectFirebaseRepository
		break
	case 'local':
		Repository = FocusProjectLocalMapRepository
		break
	default:
		Repository = FocusProjectFirebaseRepository
		break
}

export default Repository