import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Configurar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../../..', 'public/img');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    //el nombre sera según el la hora y fecha en texto  en la que se subió la foto
    const time = new Date().toISOString().replace(/:/g, '-');
    const fileName = `${time}-${file.originalname}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

export default upload;