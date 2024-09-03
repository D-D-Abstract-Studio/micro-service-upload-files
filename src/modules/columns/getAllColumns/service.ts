import { HTTPError } from '@/errors'

import { KanbanColumn } from '@/models/KanbanColumn'

export const getAllColumnsService = async () => {
  const columns = await KanbanColumn.find().catch(error => {
    throw new HTTPError('Failed to fetch boards', 500)
  })

  return columns
}
