//casos de uso

//repositorios

//controladores
import ImgController from '../controller/ImgController.js';

//use cases
import createImg from './initCaseUsesImg.js';

//init controller
const roomController = new ImgController({
  createImg,
});

export default roomController;