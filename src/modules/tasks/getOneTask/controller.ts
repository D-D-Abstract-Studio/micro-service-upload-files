import type { Request, Response } from 'express'
import { getOneTaskService as getOneTaskService } from './service'

export const getOneTaskController = async (req: Request, res: Response) => {
  const task = await getOneTaskService(req.params?.id)

  res.status(200).json(task)
}
