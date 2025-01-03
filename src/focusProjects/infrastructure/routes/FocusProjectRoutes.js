import express from 'express'

import focusProjectController from '../dependencies/initFocusProject.js'
import multer from 'multer'

const router = express.Router()
// Configurar multer para almacenar los archivos en memoria (Buffer)
const storage = multer.memoryStorage()
const upload = multer({ storage })

//console.table()
router.use((req, res, next) => {
	console.table({ path: req.path, method: req.method, origin: req.headers.origin, body: req.body, from: req.headers.referer })
	next()
})

router.get('/', focusProjectController.getAll.bind(focusProjectController))
router.get('/:id', focusProjectController.getId.bind(focusProjectController))
router.post('/', focusProjectController.create.bind(focusProjectController))

router.post('/:id/elements', upload.single('photo'), focusProjectController.createFocusElement.bind(focusProjectController))

router.get('/:id/elements', focusProjectController.getAllElements.bind(focusProjectController))



export default router
