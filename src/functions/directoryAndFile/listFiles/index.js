import fs from 'fs'

export const listFiles = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error(err)
        reject(err)
      }
      resolve(files)
    })
  })
}
