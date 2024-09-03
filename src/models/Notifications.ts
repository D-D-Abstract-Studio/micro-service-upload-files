import { collectionsData } from '@/config'
import { azePlastDB, setDefaultSettingsSchema } from '@/shared'

import { Schema } from 'mongoose'
import { z } from 'zod'

export const NotificationSchema = z.object({
  title: z.string(),
  description: z.string(),
  userId: z.string(),
  view: z.boolean(),
  taskId: z.string(),
  assignee: z.array(z.object({ userId: z.string() })),
  priority: z.string()
})

export type INotifications = Omit<DocumentSchemaZod<typeof NotificationSchema>, 'taskId' | 'reporter' | 'userId'> & {
  taskId: Schema.Types.ObjectId
  reporter: Schema.Types.ObjectId
  userId: Schema.Types.ObjectId
}

const SchemaModel = new Schema<INotifications>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: collectionsData.User.name, required: true },
    view: { type: Boolean, required: true, default: false },
    taskId: { type: Schema.Types.ObjectId, ref: collectionsData.KanbanTask.name },
    assignee: { type: [{ userId: Schema.Types.ObjectId, date: Date }], ref: collectionsData.User.name },
    priority: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: collectionsData.Notifications.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const Notifications = azePlastDB.model<INotifications>(collectionsData.Notifications.name, SchemaModel)
