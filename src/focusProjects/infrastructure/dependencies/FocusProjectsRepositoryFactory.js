import ENV from '../../../config/dotEnv.js'

import FocusProjectLocalMapRepository from '../repository/FocusProjectLocalMapRepository.js'
import FocusProjectFirebaseRepository from '../repository/FocusProjectFirebaseRepository.js'

let Repository

switch (ENV.FOCUS_PROJECT_REPOSITORY) {
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