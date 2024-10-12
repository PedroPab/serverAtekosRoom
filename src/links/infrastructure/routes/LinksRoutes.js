import express from 'express'

import linkController from '../dependencies/initLinks.js'

const router = express.Router()

router.post('/', linkController.create.bind(linkController))

router.get('/', linkController.getAll.bind(linkController))

export default router
