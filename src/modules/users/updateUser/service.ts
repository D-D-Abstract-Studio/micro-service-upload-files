import { HTTPError } from '@/errors'

import { IUser, User, UserSchema } from '@/models/User'

export const updateUserService = async (data: IUser & { userId: string }) => {
  const { name, permissions } = UserSchema.parse(data)

  const user = await User.findById(data.userId)

  if (!user) {
    throw new HTTPError('User not found', 404)
  }

  if (name) {
    const existingUser = await User.findOne({ name })

    if (existingUser && existingUser.id !== data.userId) {
      throw new HTTPError('User with this name already exists', 409)
    }

    user.name = name
  }

  if (permissions) {
    user.permissions = permissions
  }

  await user.save().catch(() => {
    throw new HTTPError('Failed to update user', 500)
  })

  return user
}
