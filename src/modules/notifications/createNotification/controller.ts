import { createNotificationService } from './service'

import type { RequestHandler } from 'express'

export const createNotificationController: RequestHandler = async (req, res) => {
  const notification = await createNotificationService(req.body)

  return res.status(201).json(notification)
}
