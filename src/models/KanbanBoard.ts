import { Schema } from 'mongoose'
import { z } from 'zod'

import { azePlastDB } from '@/shared/connection-db'

import { setDefaultSettingsSchema } from '@/shared'
import { collectionsData } from '@/config'

export const BoardSchema = z.object({
  name: z.string(),
  ordered: z.array(z.string()),
  usersIds: z.array(z.string()),
  columnIds: z.array(z.string())
})

export type IKanbanBoard = Omit<DocumentSchemaZod<typeof BoardSchema>, 'columnIds' | 'usersIds'> & {
  columnIds: Array<Schema.Types.ObjectId>
  usersIds: Array<Schema.Types.ObjectId>
}

const SchemaModel = new Schema<IKanbanBoard>(
  {
    columnIds: { type: [{ type: Schema.Types.ObjectId, ref: collectionsData.KanbanColumn.name }], required: true },
    usersIds: { type: [{ type: Schema.Types.ObjectId, ref: collectionsData.User.name }], required: true },
    ordered: { type: [String], required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: collectionsData.KanbanBoard.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const KanbanBoard = azePlastDB.model<IKanbanBoard>(collectionsData.KanbanBoard.name, SchemaModel)
