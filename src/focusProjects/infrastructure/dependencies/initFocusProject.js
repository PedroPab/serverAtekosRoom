//casos de uso
import CreateFocusProject from '../../application/CreateFocusProject.js';

//repositorios
import FocusProjectLocalMapRepository from '../repository/FocusProjectLocalMapRepository.js';

//controladores
import FocusProjectController from '../controller/FocusProjectController.js';


//repository
const focusProjectRepository = new FocusProjectLocalMapRepository();
//repository para publicar imágenes

//use cases
const createFocusProject = new CreateFocusProject({ focusProjectRepository });

//init controller
const focusProjectController = new FocusProjectController({
  createFocusProject,
});

export default focusProjectController;