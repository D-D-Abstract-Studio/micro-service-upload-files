import { HTTPError } from '@/errors'

import { User } from '@/models/User'

export const getAllUsersService = async () => {
  const users = await User.find().catch(() => {
    throw new HTTPError('Failed to fetch users', 500)
  })

  return users
}
