import ENV from '../../../config/dotEnv.js'

// Usar 'top-level await' (asegúrate de que Node y tu configuración lo soporten)
let Repository

console.log(`repository FocusElement: ${ENV.FOCUS_ELEMENT_REPOSITORY}`)
switch (ENV.FOCUS_ELEMENT_REPOSITORY) {
	case 'firebase': {
		const module = await import('../../../focusElement/infrastructure/repository/FocusElementFirebaseRepository.js')
		Repository = module.default
		break
	}
	case 'local': {
		const module = await import('../repository/FocusElementLocalMapRepository.js')
		Repository = module.default
		break
	}
	case 'mongo': {
		const module = await import('../repository/FocusElementMongoRepository.js')
		Repository = module.default
		break
	}
	case 'couch': {
		const module = await import('../repository/FocusElementCouchRepository.js')
		Repository = module.default
		break
	}
	default: {
		const module = await import('../repository/FocusElementLocalMapRepository.js')
		Repository = module.default
		break
	}
}

export default Repository