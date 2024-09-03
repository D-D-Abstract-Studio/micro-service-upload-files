import { getAllNotificationsService } from './service'

import type { RequestHandler } from 'express'

export const getAllNotificationsController: RequestHandler = async (req, res) => {
  const notifications = await getAllNotificationsService()

  return res.status(201).json(notifications)
}
