import CreateImg from '../../application/createImg.js';

import ImgBucketGoogleRepository from '../repository/PublishImgBucketGoogleRepository.js';

import PublishImgLocalFilesRepository from '../repository/PublishImgLocalFilesRepository.js';
import GetImg from '../../application/getImg.js';
import GetAllImg from '../../application/getAllImg.js';

//repository
const imgRepository = new ImgBucketGoogleRepository();
// const imgRepository = new ImgLocalMapRepository();
//repository para publicar imágenes
const publishImgRepository = new PublishImgLocalFilesRepository({});

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