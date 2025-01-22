import ENV from '../../../config/dotEnv.js'

import LinkLocalMapRepository from '../repository/LinkLocalMapRepository.js'
import LinkFirebaseRepository from '../repository/LinkFirebaseRepository.js'
import LinkMongoRepository from '../repository/LinkMongoRepository.js'
import LinkCouchRepository from '../repository/LinkCouchRepository.js'

let Repository

console.log(`repository Links: ${ENV.LINKS_REPOSITORY}`)

switch (ENV.LINKS_REPOSITORY) {
	case 'firebase':
		Repository = LinkFirebaseRepository
		break
	case 'local':
		Repository = LinkLocalMapRepository
		break
	case 'mongo':
		Repository = LinkMongoRepository
		break
	case 'couch':
		Repository = LinkCouchRepository
		break
	default:
		Repository = LinkLocalMapRepository
		break
}

export default Repository