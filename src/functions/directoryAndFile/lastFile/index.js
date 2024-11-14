import fs from 'fs'

export const lastFile = (directoryPath) => {
	return new Promise((resolve, reject) => {
		fs.readdir(directoryPath, (err, files) => {
			if (err) {
				console.error(err)
				reject(err)
			}
			const lastFile = files[files.length - 1]
			resolve(lastFile)
		})
	})
}
