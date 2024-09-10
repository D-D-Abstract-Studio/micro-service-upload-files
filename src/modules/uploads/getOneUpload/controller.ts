import { getUploadService as deleteTaskService } from './service'

import type { RequestHandler } from 'express'

export const getOneUploadController: RequestHandler = async (req, res) => {
  const file = await deleteTaskService({
    id: req.params?.id
  })

  return res.status(202).sendFile(file)
}
