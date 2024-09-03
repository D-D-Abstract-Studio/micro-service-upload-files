import { Router } from 'express'

import { endpoint } from '@/middlewares'

import { updateTaskController } from './updateTasks/controller'
import { getAllTasksController } from './getAllTasks/controller'
import { deleteTaskController } from './removeTasks/controller'
import { createTaskController } from './createTasks/controller'
import { getOneTaskController } from './getOneTask/controller'

const router = Router()

router.get('/', endpoint(getAllTasksController))

router.get('/:id', endpoint(getOneTaskController))

router.post('/', endpoint(createTaskController))

router.put('/:id', endpoint(updateTaskController))

router.delete('/:id', endpoint(deleteTaskController))

export default router
