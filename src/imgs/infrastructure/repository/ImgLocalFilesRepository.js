import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class ImgLocalFilesRepository {
  constructor() {
    this.dir = 'imgs'
    this.publicFolderPath = path.join(__dirname, '../../../public/', this.dir);
  }

  //devolvemos el un objeto con la url de la imagen
  async publish(file) {
    const filePath = path.join(this.publicFolderPath, file.name);
    const fileStream = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      fileStream.on('error', (error) => {
        reject(error);
      });

      fileStream.on('finish', () => {
        resolve({
          urlPublic: `http://localhost:8080/${this.dir}/${file.name}`,
          urlPrivate: filePath
        });
      });

      fileStream.write(file.data);
      fileStream.end();
    });
  }
}

export default ImgLocalFilesRepository;