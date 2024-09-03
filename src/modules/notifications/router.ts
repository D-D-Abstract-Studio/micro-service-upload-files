import express, { Router } from 'express'

import { endpoint } from '@/middlewares'

import { updateNotificationController } from './updateNotification/controller'
import { getAllNotificationsController } from './getAllNotifications/controller'
import { deleteNotificationController } from './deleteNotification/controller'
import { createNotificationController } from './createNotification/controller'

const router = Router()

router.get('/', endpoint(getAllNotificationsController))

router.post('/', endpoint(createNotificationController))

router.put('/:id', endpoint(updateNotificationController))

router.delete('/:id', endpoint(deleteNotificationController))

export default router
