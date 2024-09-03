import { HTTPError } from '@/errors'

import { User } from '@/models/User'
import { Types } from 'mongoose'

export const getOneUserService = async (userIdentifier: string) => {
  let user

  if (Types.ObjectId.isValid(userIdentifier)) {
    user = await User.findById(userIdentifier)
  }

  if (!user) {
    user = await User.findOne({ name: userIdentifier })
  }

  if (!user) {
    throw new HTTPError('User not found', 404)
  }

  return user
}
