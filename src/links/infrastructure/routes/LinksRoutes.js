import express from 'express'

import linkController from '../dependencies/initLinks.js'

const router = express.Router()

router.post('/', linkController.create.bind(linkController))

router.get('/', linkController.getAll.bind(linkController))

router.put('/:id', linkController.update.bind(linkController))

router.get('/:id', linkController.getById.bind(linkController))
router.get('/u/:id', linkController.getByIdUse.bind(linkController))

export default router
