import { HTTPError } from '@/errors'

import { IKanbanTask, KanbanTask, TaskSchema } from '@/models/KanbanTask'

export const createTasksService = async (data: IKanbanTask) => {
  const taskData = TaskSchema.parse(data)

  const task = new KanbanTask(taskData)

  const newTask = await task.save().catch(() => {
    throw new HTTPError('Failed to create task', 500)
  })

  return newTask
}
