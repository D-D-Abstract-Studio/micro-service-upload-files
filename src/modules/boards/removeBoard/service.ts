import { HTTPError } from '@/errors/httpError'

import { KanbanBoard } from '@/models/KanbanBoard'

import * as Z from 'zod'

type DeleteUserService = {
  id: string
}

const deleteDomainSchema = Z.object({
  id: Z.string()
})

export const deleteBoardService = async (data: DeleteUserService) => {
  const { id } = deleteDomainSchema.parse(data)

  const boardExists = await KanbanBoard.findOne({ _id: id })

  if (!boardExists) throw new HTTPError('Board not found', 404)

  return KanbanBoard.deleteOne({ _id: id })
}
