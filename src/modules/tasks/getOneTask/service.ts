import { HTTPError } from '@/errors'

import { KanbanTask } from '@/models/KanbanTask'

export const getOneTaskService = async (id: string) => {
  const task = await KanbanTask.findOne({ _id: id })

  if (!task) {
    throw new HTTPError('Task not found', 404)
  }

  return task
}
