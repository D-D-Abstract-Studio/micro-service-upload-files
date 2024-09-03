import { HTTPError } from '@/errors'

import { KanbanTask } from '@/models/KanbanTask'

export const getAllTasksService = async () => {
  const tasks = await KanbanTask.find().catch(error => {
    throw new HTTPError('Failed to fetch tasks', 500)
  })

  return tasks
}
