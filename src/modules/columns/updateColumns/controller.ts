import { updateBoardService as updateColumnService } from './service'

import type { RequestHandler } from 'express'

export const updateColumnsController: RequestHandler = async (req, res) => {
  const column = await updateColumnService({
    id: req.params?.id,
    ...req.body
  })

  return res.status(201).json(column)
}
