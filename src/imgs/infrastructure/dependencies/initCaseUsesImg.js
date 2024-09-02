import CreateImg from '../../application/createImg.js';

import ImgLocalMapRepository from '../repository/ImgLocalMapRepository.js';

import ImgLocalFilesRepository from '../repository/ImgLocalFilesRepository.js';

//repository
const imgRepository = new ImgLocalMapRepository();
//repository para publicar imágenes
const publishImgRepository = new ImgLocalFilesRepository({});

//use cases
const createImg = new CreateImg({ imgRepository, publishImgRepository });

export default createImg;