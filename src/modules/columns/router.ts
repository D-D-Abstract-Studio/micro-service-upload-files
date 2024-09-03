import express, { Router } from 'express'

import { endpoint } from '@/middlewares'

import { updateColumnsController } from './updateColumns/controller'
import { getAllColumnsController } from './getAllColumns/controller'
import { deleteBoardController } from './removeColumns/controller'
import { createColumnController } from './createColumns/controller'

const router = Router()

router.get('/', endpoint(getAllColumnsController))

router.post('/', endpoint(createColumnController))

router.put('/:id', endpoint(updateColumnsController))

router.delete('/:id', endpoint(deleteBoardController))

export default router
