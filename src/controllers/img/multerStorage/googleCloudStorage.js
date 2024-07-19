import multer from 'multer';
import bucketGoogleCloudStorage from 'multer-cloud-storage';
const MulterGoogleCloudStorage = bucketGoogleCloudStorage.default;
import ENV from '../../../config/index.js';

const uploadHandler = multer({
  storage: new MulterGoogleCloudStorage({
    projectId: ENV.PROJECT_ID,
    keyFilename: ENV.KEY_FILE_NAME,
    bucket: ENV.BUCKET_NAME,
    emulator: ENV.USE_EMULATOR ? 'localhost:8080' : undefined,
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: 'img'
  })
});

export default uploadHandler;