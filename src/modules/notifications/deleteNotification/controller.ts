import type { RequestHandler } from 'express'
import { deleteBoardService as deleteNotificationService } from './service'

export const deleteNotificationController: RequestHandler = async (req, res) => {
  await deleteNotificationService({
    id: req.params?.id
  })

  return res.status(202).json({ message: 'Notificação deletada com sucesso' })
}
