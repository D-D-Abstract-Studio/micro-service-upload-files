import { getAllColumnsService } from './service'

import type { RequestHandler } from 'express'

export const getAllColumnsController: RequestHandler = async (req, res) => {
  const columns = await getAllColumnsService()

  return res.status(201).json(columns)
}
