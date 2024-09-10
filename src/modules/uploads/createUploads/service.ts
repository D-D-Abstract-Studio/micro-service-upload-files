type Props = {
  files: Express.Multer.File[]
}

export const createUploadsService = async ({ files }: Props) => {
  const newfiles = files.map(file => {
    return {
      ...file,
      name: file.filename,
      size: file.size,
      type: file.mimetype,
      preview: `http://${process.env.RAILWAY_PUBLIC_DOMAIN}/${file.path.split('src/')[1]}`
    }
  })

  return newfiles
}
