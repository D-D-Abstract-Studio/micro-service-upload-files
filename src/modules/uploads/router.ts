import { Router } from 'express'

import { endpoint } from '@/middlewares'

import { deleteUploadController } from './removeUpload/controller'
import { createUploadsController } from './createUploads/controller'
import { getOneUploadController } from './getOneUpload/controller'

import { uploadAndProcessImages } from '@/shared/multer-config'

const router = Router()

router.post('/', uploadAndProcessImages, endpoint(createUploadsController))

router.get('/:id', endpoint(getOneUploadController))

router.delete('/:id', endpoint(deleteUploadController))

export default router
