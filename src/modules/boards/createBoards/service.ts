import { HTTPError } from '@/errors'

import { IKanbanBoard, KanbanBoard, BoardSchema } from '@/models/KanbanBoard'

export const createBoardService = async (data: IKanbanBoard) => {
  const boardData = BoardSchema.parse(data)

  const board = new KanbanBoard(boardData)

  const newBoard = await board.save().catch(() => {
    throw new HTTPError('Failed to create board', 500)
  })

  return newBoard
}
