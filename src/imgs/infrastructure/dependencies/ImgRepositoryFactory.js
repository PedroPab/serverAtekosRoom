import ENV from '../../../config/dotEnv.js'

// Usar 'top-level await' (asegúrate de que Node y tu configuración lo soporten)
let Repository

switch (ENV.IMG_REPOSITORY) {
	case 'firebase': {
		const module = await import('../repository/ImgFirebaseRepository.js')
		Repository = module.default
		break
	}
	case 'local': {
		const module = await import('../repository/ImgLocalMapRepository.js')
		Repository = module.default
		break
	}
	case 'mongo': {
		const module = await import('../repository/ImgLocalMapRepository.js')
		Repository = module.default
		break
	}
	case 'couch': {
		const module = await import('../repository/ImgCouchRepository.js')
		Repository = module.default
		break
	}
	default: {
		const module = await import('../repository/ImgFirebaseRepository.js')
		Repository = module.default
		break
	}
}

export default Repository

