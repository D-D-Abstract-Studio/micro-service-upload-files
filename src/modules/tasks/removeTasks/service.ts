import { HTTPError } from '@/errors/httpError'

import { KanbanTask } from '@/models/KanbanTask'

export const deleteBoardService = async ({ id }: { id: string }) => {
  const boardExists = await KanbanTask.findOne({ _id: id })

  if (!boardExists) throw new HTTPError('Task not found', 404)

  return KanbanTask.deleteOne({ _id: id })
}
