import fs from 'fs'

export const deleteFile = (directoryPath) => {
	return new Promise((resolve, reject) => {
		fs.unlink(directoryPath, (err) => {
			if (err) {
				console.error(err)
				reject(err)
			}
			resolve()
		})
	})
}