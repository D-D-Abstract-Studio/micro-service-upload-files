import { HTTPError } from '@/errors/httpError'

import { Notifications } from '@/models/Notifications'

import * as Z from 'zod'

const deleteNotificationSchema = Z.object({
  id: Z.string()
})

export const deleteBoardService = async (data: { id: string }) => {
  const { id } = deleteNotificationSchema.parse(data)

  const notificationExists = await Notifications.findOne({ _id: id })

  if (!notificationExists) throw new HTTPError('Notification not found', 404)

  return Notifications.deleteOne({ _id: id })
}
