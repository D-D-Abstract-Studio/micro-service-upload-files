import { createUploadsService } from './service'

import type { RequestHandler } from 'express'

export const createUploadsController: RequestHandler = async (req, res) => {
  const files = req.files as Express.Multer.File[]

  const result = await createUploadsService({ files })

  return res.status(201).json(result)
}
