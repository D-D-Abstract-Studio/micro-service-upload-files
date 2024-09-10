import fs from 'node:fs'
import path from 'node:path'

type DeleteUploadService = {
  id: string
}

export const deleteUploadService = async ({ id }: DeleteUploadService) => {
  const filePath = path.join(__dirname, '../../../uploads', id)

  const file = await fs.promises.unlink(filePath)

  return file
}
