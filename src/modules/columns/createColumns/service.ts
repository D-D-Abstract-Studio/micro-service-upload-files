import { HTTPError } from '@/errors'

import { IKanbanColumn, KanbanColumn, ColumnSchema } from '@/models/KanbanColumn'

export const createColumnService = async (data: IKanbanColumn) => {
  const columnData = ColumnSchema.parse(data)

  const column = new KanbanColumn(columnData)

  const newBoard = await column.save().catch(() => {
    throw new HTTPError('Failed to create column', 500)
  })

  return newBoard
}
