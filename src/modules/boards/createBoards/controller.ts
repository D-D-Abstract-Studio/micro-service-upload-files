import { createBoardService } from './service'

import type { RequestHandler } from 'express'

export const createBoardController: RequestHandler = async (req, res) => {
  const result = await createBoardService(req.body)

  return res.status(201).json({ items: result, message: 'Quadro criado com sucesso' })
}
