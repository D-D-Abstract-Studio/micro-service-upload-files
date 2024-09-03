import { createUserService } from './service'

import type { RequestHandler } from 'express'

export const createUserController: RequestHandler = async (req, res) => {
  await createUserService(req.body)

  return res.status(201).json({ message: 'User created successfully' })
}
