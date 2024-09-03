import { Schema } from 'mongoose'
import { z } from 'zod'

import { azePlastDB, setDefaultSettingsSchema } from '@/shared'
import { collectionsData } from '@/config'

const userPermissions = ['user', 'admin'] as const

export const UserSchema = z.object({
  name: z.string(),
  permissions: z.enum(userPermissions)
})

export type IUser = DocumentSchemaZod<typeof UserSchema>

const SchemaModel = new Schema<IUser>(
  {
    name: { type: String, required: true },
    permissions: { type: String, enum: userPermissions, default: 'user' }
  },
  {
    timestamps: true,
    collection: collectionsData.User.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const User = azePlastDB.model<IUser>(collectionsData.User.name, SchemaModel)
