import { HTTPError } from '@/errors'

import { IKanbanTask, KanbanTask, TaskSchema } from '@/models/KanbanTask'
import { User } from '@/models/User'

export const updateTaskService = async (data: IKanbanTask & { userName: string }) => {
  const { name, archived, priority, categories, files, description, assignee, dueDate, userId } = TaskSchema.parse(data)

  const task = await KanbanTask.findById(data.id)

  const user = await User.findOne({ name: data.userName })

  if (!task) {
    throw new HTTPError('Task not found', 404)
  }

  Object.assign(task, {
    userId,
    name,
    files,
    archived,
    priority,
    categories,
    description,
    assignee,
    dueDate,
    history: [...task.history, ...[{ userId: user?._id, date: new Date() }]]
  })

  await task.save().catch(() => {
    throw new HTTPError('Failed to update task', 500)
  })

  return task
}
