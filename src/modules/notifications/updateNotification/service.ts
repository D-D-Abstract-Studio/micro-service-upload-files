import { HTTPError } from '@/errors'

import { type INotifications, NotificationSchema, Notifications } from '@/models/Notifications'

export const updateNotificationService = async (data: INotifications) => {
  const { title, description, userId, view, taskId, assignee, priority } = NotificationSchema.parse(data)

  const notification = await Notifications.findById(data.id)

  if (!notification) {
    throw new HTTPError('Notification not found', 404)
  }

  Object.assign(notification, { title, description, userId, view, taskId, assignee, priority })

  await notification.save().catch(() => {
    throw new HTTPError('Failed to update notification', 500)
  })

  return notification
}
