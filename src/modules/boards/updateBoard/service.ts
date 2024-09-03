import { HTTPError } from '@/errors'

import { IKanbanBoard, KanbanBoard, BoardSchema } from '@/models/KanbanBoard'

export const updateBoardService = async (data: IKanbanBoard) => {
  const { name, usersIds, columnIds, ordered } = BoardSchema.parse(data)

  const board = await KanbanBoard.findById(data.id)

  if (!board) {
    throw new HTTPError('Board not found', 404)
  }

  if (name) {
    const existingBoard = await KanbanBoard.findOne({ name })

    if (existingBoard && existingBoard.id !== data.id) {
      throw new HTTPError('Board with this name already exists', 409)
    }

    board.name = name
  }

  Object.assign(board, { name, usersIds, columnIds, ordered })

  await board.save().catch(error => {
    throw new HTTPError('Failed to update board', 500)
  })

  return board
}
