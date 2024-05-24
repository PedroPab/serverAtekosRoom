import Logs from "../../utils/logColor/index.js";


export const uploadPhoto = async (req, res) => {
  try {
    if (!req.file) {
      Logs.logError('No se ha recibido ninguna foto')
      return res.status(400).send('No se ha recibido ninguna foto');
    }
    //medir el tamaño de la foto
    const fileSize = req.file.size;
    Logs.logInfo(`Tamaño de la foto: ${fileSize} bytes`);
    //guardamos en el bucket de google cloud storage
    Logs.logDebugger('Foto recibida y guardada correctamente');
    res.send('Foto recibida y guardada correctamente');
  } catch (err) {
    Logs.logError('Error al guardar la foto');
    res.status(500).send('Error al guardar la foto');
  }
}


