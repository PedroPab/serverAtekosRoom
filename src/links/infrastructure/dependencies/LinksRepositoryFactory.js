import ENV from '../../../config/dotEnv.js'

// Usar 'top-level await' (asegúrate de que Node y tu configuración lo soporten)
let Repository

console.log(`repository Links: ${ENV.LINKS_REPOSITORY}`)

switch (ENV.LINKS_REPOSITORY) {
	case 'firebase': {
		const module = await import('../repository/LinkFirebaseRepository.js')
		Repository = module.default
		break
	}
	case 'local': {
		const module = await import('../repository/LinkLocalMapRepository.js')
		Repository = module.default
		break
	}
	case 'mongo': {
		const module = await import('../repository/LinkMongoRepository.js')
		Repository = module.default
		break
	}
	case 'couch': {
		const module = await import('../repository/LinkCouchRepository.js')
		Repository = module.default
		break
	}
	default: {
		const module = await import('../repository/LinkLocalMapRepository.js')
		Repository = module.default
		break
	}
}

export default Repository