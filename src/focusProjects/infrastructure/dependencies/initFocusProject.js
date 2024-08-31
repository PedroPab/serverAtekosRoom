//casos de uso
import CreateFocusProject from '../../application/CreateFocusProject.js';

//repositorios
import FocusProjectLocalMapRepository from '../repository/FocusProjectLocalMapRepository.js';
import FocusElementLocalMapRepository from '../../../focusElement/infrastructure/repository/FocusElementLocalMapRepository.js';

//controladores
import FocusProjectController from '../controller/FocusProjectController.js';
import CreateFocusElementFromProject from '../../application/CreateFocusElement.js';


//repository
const focusProjectRepository = new FocusProjectLocalMapRepository();
const focusElementRepository = new FocusElementLocalMapRepository();
//repository para publicar imágenes

//use cases
const createFocusProject = new CreateFocusProject({ focusProjectRepository });
const createFocusElementFromProject = new CreateFocusElementFromProject({
  focusProjectRepository, focusElementRepository
});

//init controller
const focusProjectController = new FocusProjectController({
  createFocusProject,
  createFocusElementFromProject
});

export default focusProjectController;