// FocusProjectsRepositoryFactory.js
import ENV from '../../../config/dotEnv.js'

// Usar 'top-level await' (asegúrate de que Node y tu configuración lo soporten)
let Repository

switch (ENV.FOCUS_PROJECT_REPOSITORY) {
	case 'firebase': {
		const module = await import('../repository/FocusProjectFirebaseRepository.js')
		Repository = module.default
		break
	}
	case 'local': {
		const module = await import('../repository/FocusProjectLocalMapRepository.js')
		Repository = module.default
		break
	}
	case 'mongo': {
		const module = await import('../repository/FocusProjectMongoRepository.js')
		Repository = module.default
		break
	}
	case 'couch': {
		const module = await import('../repository/FocusProjectCouchRepository.js')
		Repository = module.default
		break
	}
	default: {
		const module = await import('../repository/FocusProjectFirebaseRepository.js')
		Repository = module.default
		break
	}
}

export default Repository
