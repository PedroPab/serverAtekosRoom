import multer from 'multer';

// Guardar en disco
// import storage from './multerStorage/diskStorage.js';

// Guardar en Google Cloud Storage (bucket)
import storage from './multerStorage/googleCloudStorage.js';

const upload = multer({ storage: storage });

export default storage;