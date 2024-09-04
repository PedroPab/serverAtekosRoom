//casos de uso
import GetAllFocusProject from '../../application/GetAllFocusProject.js'
import CreateFocusProject from '../../application/CreateFocusProject.js';
import GetAllElementFromFocusProject from '../../application/GetAllElementFromFocusProject.js';

//casos de uso Elements
import { createImg } from '../../../imgs/infrastructure/dependencies/initCaseUsesImg.js';
//repositorios
import FocusProjectLocalMapRepository from '../repository/FocusProjectLocalMapRepository.js';
import FocusElementLocalMapRepository from '../../../focusElement/infrastructure/repository/FocusElementLocalMapRepository.js';

//controladores
import FocusProjectController from '../controller/FocusProjectController.js';
import CreateFocusElementFromProject from '../../application/CreateFocusElement.js';
import CreateFocusElement from '../../../focusElement/application/CreateFocusElement.js';
import FindFocusProject from '../../application/FindFocusProject.js';


//repository
const focusProjectRepository = new FocusProjectLocalMapRepository();
const focusElementRepository = new FocusElementLocalMapRepository();
//repository para publicar imágenes

//use cases
const getAllFocusProjects = new GetAllFocusProject({ focusProjectRepository })
const createFocusProject = new CreateFocusProject({ focusProjectRepository });

//use cases Elements
const findFocusElement = new FindFocusProject({ focusProjectRepository });
const createFocusElement = new CreateFocusElement({ focusElementRepository, createImg })

const createFocusElementFromProject = new CreateFocusElementFromProject({
  focusProjectRepository,
  focusElementRepository,
  findFocusElement,
  createFocusElement,
});

const getAllElementsByIdFocusProject = new GetAllElementFromFocusProject({ focusProjectRepository, focusElementRepository });

//init controller
const focusProjectController = new FocusProjectController({
  getAllFocusProjects,
  createFocusProject,
  createFocusElementFromProject,
  getAllElementsByIdFocusProject,
});

export default focusProjectController;