import CreateImg from '../../application/createImg.js';

import PublishImgBucketGoogleRepository from '../repository/PublishImgBucketGoogleRepository.js';

import GetImg from '../../application/getImg.js';
import GetAllImg from '../../application/getAllImg.js';
import ImgLocalMapRepository from '../repository/ImgLocalMapRepository.js';

//repository
const imgRepository = new ImgLocalMapRepository();
// const imgRepository = new ImgLocalMapRepository();
//repository para publicar imágenes
const publishImgRepository = new PublishImgBucketGoogleRepository({});

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