import express from 'express'
import path from 'path'
import { __dirname } from '../../../dirname.js'

const setPublicFolder = (app, folderPath) => {
	const publicPath = path.join(__dirname, folderPath)
	// app.use(express.static(publicPath))

	// Servir los archivos estáticos desde la carpeta "build"
	app.use(express.static(path.join(publicPath, 'dist')))
	app.use(express.static(path.join(publicPath)))
	// Manejar cualquier ruta y devolver el archivo "index.html"
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(publicPath, 'dist', 'index.html'))
	})
}

export default setPublicFolder
