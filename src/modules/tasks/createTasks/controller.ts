import { createTasksService } from './service'

import type { RequestHandler } from 'express'

export const createTaskController: RequestHandler = async (req, res) => {
  const result = await createTasksService({ ...req.body })

  return res.status(201).json(result)
}
