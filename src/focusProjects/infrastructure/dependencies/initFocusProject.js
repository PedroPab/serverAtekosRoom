//casos de uso
import GetAllFocusProject from '../../application/GetAllFocusProject.js'
import CreateFocusProject from '../../application/CreateFocusProject.js'
import GetAllElementFromFocusProject from '../../application/GetAllElementFromFocusProject.js'

//casos de uso Elements
import { createImg } from '../../../imgs/infrastructure/dependencies/initCaseUsesImg.js'

//controladores
import FocusProjectController from '../controller/FocusProjectController.js'
import CreateFocusElementFromProject from '../../application/CreateFocusElement.js'
import CreateFocusElement from '../../../focusElement/application/CreateFocusElement.js'
import FindFocusProject from '../../application/FindFocusProject.js'

//repositorios
import FocusProjectsRepository from './FocusProjectsRepositoryFactory.js'
import FocusElementRepository from '../../../focusElement/infrastructure/dependencies/FocusElementRepositoryFactory.js'

//repository
const focusProjectRepository = new FocusProjectsRepository()
const focusElementRepository = new FocusElementRepository()
//repository para publicar imágenes

//use cases
const getAllFocusProjects = new GetAllFocusProject({ focusProjectRepository })
const createFocusProject = new CreateFocusProject({ focusProjectRepository })

//use cases Elements
const findFocusElement = new FindFocusProject({ focusProjectRepository })
const createFocusElement = new CreateFocusElement({ focusElementRepository, createImg })

const createFocusElementFromProject = new CreateFocusElementFromProject({
	focusProjectRepository,
	focusElementRepository,
	findFocusElement,
	createFocusElement,
})

const getAllElementsByIdFocusProject = new GetAllElementFromFocusProject({ focusProjectRepository, focusElementRepository })

//init controller
const focusProjectController = new FocusProjectController({
	getAllFocusProjects,
	createFocusProject,
	createFocusElementFromProject,
	getAllElementsByIdFocusProject,
})

export default focusProjectController