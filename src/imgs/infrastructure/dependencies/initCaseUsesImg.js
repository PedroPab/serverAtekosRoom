import CreateImg from '../../application/createImg.js';

import ImgLocalMapRepository from '../repository/ImgLocalMapRepository.js';

import ImgLocalFilesRepository from '../repository/ImgLocalFilesRepository.js';
import GetImg from '../../application/getImg.js';
import GetAllImg from '../../application/getAllImg.js';

//repository
const imgRepository = new ImgLocalMapRepository();
//repository para publicar imágenes
const publishImgRepository = new ImgLocalFilesRepository({});

//use cases
const createImg = new CreateImg({
  imgRepository,
  publishImgRepository
});

const getIdImg = new GetImg({
  imgRepository,
});

const getAllImgs = new GetAllImg({
  imgRepository,
});

export {
  createImg,
  getIdImg,
  getAllImgs,
};