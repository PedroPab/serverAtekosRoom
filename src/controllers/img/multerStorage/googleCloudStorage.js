import multer from 'multer';
import bucketGoogleCloudStorage from 'multer-cloud-storage';
const MulterGoogleCloudStorage = bucketGoogleCloudStorage.default;
import ENV from '../../../config/index.js';

const uploadHandler = multer({
  storage: new MulterGoogleCloudStorage({
    projectId: ENV.PROJECT_ID,
    key: ENV.SERVICES_KEY_BUCKET,
    bucket: ENV.BUCKET_NAME,
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: 'img'
  })
});

export default uploadHandler;