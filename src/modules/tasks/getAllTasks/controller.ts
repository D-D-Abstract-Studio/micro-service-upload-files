import { getAllTasksService as getAllTasksService } from './service'

import type { RequestHandler } from 'express'

export const getAllTasksController: RequestHandler = async (req, res) => {
  const tasks = await getAllTasksService()

  return res.status(201).json(tasks)
}
