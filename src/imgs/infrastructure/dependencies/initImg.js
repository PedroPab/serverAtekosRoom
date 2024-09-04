//casos de uso

//repositorios

//controladores
import ImgController from '../controller/ImgController.js';

//use cases
import { createImg, getIdImg, getAllImgs } from './initCaseUsesImg.js';

//init controller
const roomController = new ImgController({
  createImg,
  getIdImg,
  getAllImgs,
});

export default roomController;