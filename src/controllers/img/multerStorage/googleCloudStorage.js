import * as multer from 'multer';
import * as express from 'express';
import * as MulterGoogleCloudStorage from 'multer-cloud-storage';

import filename from '../filename.js';

const uploadHandler = multer({
  storage: new MulterGoogleCloudStorage()
});

// const upload = new MulterGoogleCloudStorage({
//   projectId: 'atekos-369512',
//   keyFilename: '.servicesKeyBucket.json',
//   bucket: 'server-atekos-bucket',
//   filename: filename,
//   destination: 'img'
// })


export default uploadHandler;