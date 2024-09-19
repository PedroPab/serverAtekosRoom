import { Storage } from '@google-cloud/storage';

class PublishImgBucketGoogleRepository {
  constructor({ directoryFolder = 'img' }) {
    super();
    this.directoryFolder = directoryFolder;
    this.publicFolderPath = null
    this.storage = new Storage();
    this.bucketName = directoryFolder; // Cambia esto por el nombre de tu bucket
    this.bucket = this.storage.bucket(this.bucketName);
  }

  async getAll() {
    try {
      const [files] = await this.bucket.getFiles();
      return files.map(file => file.name);
    } catch (error) {
      throw new Error(`Error al obtener todas las imágenes: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      const file = this.bucket.file(id);
      const [exists] = await file.exists();
      if (!exists) {
        throw new Error('Imagen no encontrada');
      }
      const [metadata] = await file.getMetadata();
      return metadata;
    } catch (error) {
      throw new Error(`Error al obtener la imagen: ${error.message}`);
    }
  }

  async getFilter(filter) {
    try {
      const [files] = await this.bucket.getFiles({ prefix: filter });
      return files.map(file => file.name);
    } catch (error) {
      throw new Error(`Error al filtrar las imágenes: ${error.message}`);
    }
  }

  async save(img) {
    try {
      const { originalname, buffer } = img;
      const file = this.bucket.file(originalname);
      await file.save(buffer);
      return `Imagen ${originalname} guardada exitosamente.`;
    } catch (error) {
      throw new Error(`Error al guardar la imagen: ${error.message}`);
    }
  }

  async update(id, img) {
    try {
      const file = this.bucket.file(id);
      const [exists] = await file.exists();
      if (!exists) {
        throw new Error('Imagen no encontrada');
      }
      await file.save(img.buffer);
      return `Imagen ${id} actualizada exitosamente.`;
    } catch (error) {
      throw new Error(`Error al actualizar la imagen: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const file = this.bucket.file(id);
      await file.delete();
      return `Imagen ${id} eliminada exitosamente.`;
    } catch (error) {
      throw new Error(`Error al eliminar la imagen: ${error.message}`);
    }
  }
}

export default PublishImgBucketGoogleRepository;
