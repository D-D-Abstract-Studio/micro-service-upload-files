import { getAllUsersService } from './service'

import type { RequestHandler } from 'express'

export const getAllUsersController: RequestHandler = async (req, res) => {
  const users = await getAllUsersService()

  return res.status(201).json(users)
}
