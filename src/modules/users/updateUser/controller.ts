import { updateUserService } from './service'

import type { RequestHandler } from 'express'

export const updateUserController: RequestHandler = async (req, res) => {
  const user = await updateUserService({
    userId: req.params?.id,
    ...req.body
  })

  return res.status(201).json({ message: 'User updated', user })
}
