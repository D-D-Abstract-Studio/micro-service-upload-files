import { updateNotificationService } from './service'

import type { RequestHandler } from 'express'

export const updateNotificationController: RequestHandler = async (req, res) => {
  const notification = await updateNotificationService({
    id: req.params?.id,
    ...req.body
  })

  return res.status(201).json({ message: 'Notification updated', notification })
}
