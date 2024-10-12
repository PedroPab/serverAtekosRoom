import { Timestamp } from 'firebase-admin/firestore'
import db from '../../config/firebase/config.js'

class FirebaseRepository {
  constructor(collectionName) {
    this.collection = db.collection(collectionName)
  }

  async save(key, value) {
    try {
      await this.collection.doc(key).set(value)
      return { id: key, ...value }
    } catch (error) {
      throw new Error(`Error al guardar el documento: ${error.message}`)
    }
  }

  async get(key) {
    try {
      const doc = await this.collection.doc(key).get()
      if (doc.exists) {
        const data = this._convertTimestampsToDates(doc.data())
        return { id: doc.id, ...data }
      } else {
        throw new Error(`Documento con ID ${key} no encontrado.`)
      }
    } catch (error) {
      throw new Error(`Error al obtener el documento: ${error.message}`)
    }
  }

  async getAll() {
    try {
      const querySnapshot = await this.collection.get()
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...this._convertTimestampsToDates(doc.data())
      }))
      return docs
    } catch (error) {
      throw new Error(`Error al obtener todos los documentos: ${error.message}`)
    }
  }

  async getById(key) {
    try {
      const doc = await this.collection.doc(key).get()
      if (doc.exists) {
        const data = this._convertTimestampsToDates(doc.data())
        return { id: doc.id, ...data }
      } else {
        throw new Error(`Documento con ID ${key} no encontrado.`)
      }
    } catch (error) {
      if (error.message === `Documento con ID ${key} no encontrado.`) {
        return null
      }
      throw new Error(`Error al obtener el documento por ID: ${error.message}`)
    }
  }

  async getByFilter(filter) {
    try {
      const querySnapshot = await this.collection.where(filter.key, filter.option, filter.value).get()
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...this._convertTimestampsToDates(doc.data())
      }))
      return docs
    } catch (error) {
      throw new Error(`Error al obtener los documentos por filtro: ${error.message}`)
    }
  }

  async update(key, value) {
    try {
      await this.collection.doc(key).update(value)
      return { id: key, ...value }
    } catch (error) {
      throw new Error(`Error al actualizar el documento: ${error.message}`)
    }
  }

  async delete(key) {
    try {
      await this.collection.doc(key).delete()
      return { id: key, message: `Documento eliminado exitosamente.` }
    } catch (error) {
      throw new Error(`Error al eliminar el documento: ${error.message}`)
    }
  }

  // Método para convertir automáticamente los campos de tipo Timestamp a Date
  _convertTimestampsToDates(data) {
    for (let key in data) {
      if (data[key] instanceof Timestamp) {
        // Convertir el Timestamp a un objeto Date de JavaScript
        data[key] = data[key].toDate()
      }
    }
    return data
  }
}

export default FirebaseRepository
