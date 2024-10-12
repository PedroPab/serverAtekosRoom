import ffmpeg from 'fluent-ffmpeg'
import path from 'path'
import fs from 'fs'
import { __dirname } from '../../../dirname.js'


// Ruta donde se encuentran tus imágenes
const imagesPath = path.join(__dirname, '/public/img')
const outputPath = path.join(__dirname, '/public/vid')

const getImagesFromFolder = (folderPath) => {
  try {
    return fs.readdirSync(folderPath).filter(file => {
      // Filtrar solo archivos de imagen, puedes ajustar esta parte según tus necesidades
      return file.endsWith('.jpg') || file.endsWith('.png')
    }).sort()
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`)
    process.exit(1)
  }
}

const renameImages = (images, folderPath) => {
  images.forEach((image, index) => {
    const oldPath = path.join(folderPath, image)
    const newPath = path.join(folderPath, `img${String(index).padStart(3, '0')}.jpg`)
    fs.renameSync(oldPath, newPath)
  })
}

const createVideoFromImages = (images, output, fps, nameVideoOutput) => {
  if (images.length === 0) {
    console.error('No images found in the specified directory.')
    process.exit(1)
  }

  // Renombrar imágenes en secuencia
  renameImages(images, imagesPath)

  ffmpeg()
    .input(path.join(imagesPath, 'img%03d.jpg'))
    .inputFPS(fps)
    .output(path.join(output, nameVideoOutput))
    .videoCodec('libx264')
    .outputOptions('-pix_fmt yuv420p')
    .on('start', (commandLine) => {
      console.log('Spawned FFmpeg with command: ' + commandLine)
    })
    .on('error', (err, stdout, stderr) => {
      console.error('Error: ' + err.message)
      console.error('ffmpeg stderr: ' + stderr)
    })
    // eslint-disable-next-line no-unused-vars
    .on('end', (stdout, stderr) => {
      console.log('Transcoding succeeded!')
    })
    .run()
}


const initCreateVideo = () => {

  const fps = 4 // Número de frames por segundo
  // Recoger los nombres de los archivos desde la carpeta
  const images = getImagesFromFolder(imagesPath)

  // Crear el video
  //segun la fecha y hora se crea un nombre de video
  const nameVideoOutput = `${new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-')}_video.mp4`
  createVideoFromImages(images, outputPath, fps, nameVideoOutput)
}

export default initCreateVideo
