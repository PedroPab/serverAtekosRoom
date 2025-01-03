import ENV from '../../../config/dotEnv.js'

import FocusElementFirebaseRepository from '../../../focusElement/infrastructure/repository/FocusElementFirebaseRepository.js'
import FocusElementLocalMapRepository from '../repository/FocusElementLocalMapRepository.js'

let Repository
console.log(`repository FocusElement: ${ENV.FOCUS_ELEMENT_REPOSITORY}`)
switch (ENV.FOCUS_ELEMENT_REPOSITORY) {
	case 'firebase':
		Repository = FocusElementFirebaseRepository
		break
	case 'local':
		Repository = FocusElementLocalMapRepository
		break
	default:
		Repository = FocusElementLocalMapRepository
		break
}

export default Repository