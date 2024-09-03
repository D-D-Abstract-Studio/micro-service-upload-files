import { HTTPError } from '@/errors'

import { type INotifications, Notifications, NotificationSchema } from '@/models/Notifications'

export const createNotificationService = async (data: INotifications) => {
  const notificationsData = NotificationSchema.parse(data)

  const notification = new Notifications(notificationsData)

  const newNotification = await notification.save().catch(error => {
    throw new HTTPError('Failed to create Notification', 500)
  })

  return newNotification
}
