import { HTTPError } from '@/errors/httpError'

import { User } from '@/models/User'

export const deleteUserService = async (id: string) => {
  const domainExists = await User.findOne({ _id: id })

  if (!domainExists) throw new HTTPError('User not found', 404)

  return User.deleteOne({ _id: id })
}
