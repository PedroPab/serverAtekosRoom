//casos de uso
import CreateImg from '../../application/createImg.js';

//repositorios
import ImgLocalMapRepository from '../repository/ImgLocalMapRepository.js';

//controladores
import ImgController from '../controller/ImgController.js';
import ImgLocalFilesRepository from '../repository/ImgLocalFilesRepository.js';


//repository
const imgRepository = new ImgLocalMapRepository();
//repository para publicar imágenes
const publishImgRepository = new ImgLocalFilesRepository();

//use cases
const createImg = new CreateImg({ imgRepository, publishImgRepository });

//init controller
const roomController = new ImgController({
  createImg,
});

export default roomController;