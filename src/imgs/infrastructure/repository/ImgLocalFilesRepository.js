import fs from 'fs';
import path from 'path';
import publishImgRepository from '../../domain/repository/publishImgRepository.js';
import { __dirname } from '../../../../dirname.js';

export class ImgLocalFilesRepository extends publishImgRepository {
  constructor({ directoryFolder = 'img' }) {
    super();
    this.directoryFolder = directoryFolder;
    this.publicFolderPath = this._resolvePublicFolderPath();
  }

  async publish({ filePath, fileName, buffer }) {
    try {
      await this._ensureDirectoryExists(this.publicFolderPath);

      filePath = this._getFilePath(filePath, fileName);

      await this._writeFile(filePath, buffer);

      return this._generateResponse(filePath);
    } catch (error) {
      this._handleError(error);
    }
  }

  _resolvePublicFolderPath() {
    return path.resolve(__dirname, 'public', this.directoryFolder);
  }

  _getFilePath(filePath, fileName) {
    return filePath || path.join(this.publicFolderPath, fileName);
  }

  async _writeFile(filePath, buffer) {
    return new Promise((resolve, reject) => {
      const fileStream = fs.createWriteStream(filePath);

      fileStream.on('error', reject);

      fileStream.write(buffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });

      fileStream.end();
    });
  }

  _generateResponse(filePath) {
    //devover la ruta relativa de filePath (desde la raíz del proyecto)

    return {
      urlPublic: path.join('/', this.directoryFolder, path.basename(filePath)),
      urlPrivate: path.join('/', this.directoryFolder, path.basename(filePath))
    };
  }

  async _ensureDirectoryExists(directoryPath) {
    try {
      await fs.promises.mkdir(directoryPath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }
  }

  _handleError(error) {
    throw new Error('Error al publicar la imagen');
  }
}

export default ImgLocalFilesRepository;
