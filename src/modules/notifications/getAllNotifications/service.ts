import { HTTPError } from '@/errors'

import { Notifications } from '@/models/Notifications'

export const getAllNotificationsService = async () => {
  const notifications = await Notifications.find().catch(error => {
    throw new HTTPError('Failed to get notifications', 500)
  })

  return notifications
}
