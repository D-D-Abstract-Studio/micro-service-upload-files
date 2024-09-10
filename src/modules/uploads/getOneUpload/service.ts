import path from 'node:path'

type GetUploadService = {
  id: string
}

export const getUploadService = async ({ id }: GetUploadService) => {
  const filePath = path.join(__dirname, '../../../uploads', id)

  return filePath
}
