//casos de uso
import CreateImg from '../../application/createImg.js';

//repositorios
import ImgLocalMapRepository from '../repository/ImgLocalMapRepository.js';

//controladores
import ImgController from '../controller/ImgController.js';


//repository
const imgRepository = new ImgLocalMapRepository();

//use cases
const createImg = new CreateImg({ imgRepository });

//init controller
const roomController = new ImgController({
  createImg,
});

export default roomController;