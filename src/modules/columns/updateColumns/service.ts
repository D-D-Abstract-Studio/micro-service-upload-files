import { HTTPError } from '@/errors'

import { IKanbanColumn, KanbanColumn, ColumnSchema } from '@/models/KanbanColumn'

export const updateBoardService = async (data: IKanbanColumn) => {
  const { name, boardId, archived, taskIds } = ColumnSchema.parse(data)

  const column = await KanbanColumn.findById(data.id)

  if (!column) {
    throw new HTTPError('Column not found', 404)
  }

  Object.assign(column, { name, boardId, archived, taskIds })

  await column.save().catch(error => {
    throw new HTTPError('Failed to update column', 500)
  })

  return column
}
