import { Storage } from '@google-cloud/storage';
import ENV from '../../../config/dotEnv.js';

class PublishImgBucketGoogleRepository {
  constructor({ directoryFolder = 'img' }) {
    this.directoryFolder = directoryFolder;
    this.publicFolderPath = null;
    this.storage = new Storage({
      credentials: ENV.SERVICES_KEY_BUCKET,
    });
    this.bucketName = ENV.BUCKET_NAME; // Nombre del bucket desde tus variables de entorno
    this.bucket = this.storage.bucket(this.bucketName);
  }

  async publish({ fileName, buffer }) {
    try {
      // Especifica la ruta completa incluyendo la carpeta
      const fullFilePath = this.directoryFolder ? `${this.directoryFolder}/${fileName}` : fileName;

      const file = this.bucket.file(fullFilePath);

      // Subimos la imagen utilizando un stream
      await new Promise((resolve, reject) => {
        const stream = file.createWriteStream({
          metadata: {
            contentType: 'image/jpeg', // Cambia esto según el tipo de archivo
          },
          resumable: false,
        });

        stream.on('error', reject);
        stream.on('finish', resolve);
        stream.end(buffer);
      });

      // Hacer que el archivo sea público
      await file.makePublic();

      // URL pública
      const publicUrl = `https://storage.googleapis.com/${this.bucketName}/${fullFilePath}`;

      // Obtener URL privada firmada que expira en 1 hora
      const privateUrl = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60, // Expira en 1 hora
      });

      // Devolver ambas URLs
      return {
        urlPublic: publicUrl,
        urlPrivate: privateUrl[0], // La URL firmada es devuelta en un array
      };
    } catch (error) {
      console.error(`Error publicando la imagen: ${error.message}`);
      throw new Error('ERR_PUBLISH_IMG_FAILED' + error.message);
    }
  }
}

export default PublishImgBucketGoogleRepository;
