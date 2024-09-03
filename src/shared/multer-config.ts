import { existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

import { format } from 'date-fns'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const dir = resolve(__dirname, '..', 'uploads')

    if (!existsSync(dir)) {
      mkdirSync(dir)
    }

    cb(null, dir)
  },
  filename: (_req, file, cb) => {
    const originalNameUtf8 = Buffer.from(file.originalname, 'latin1').toString('utf8')
    const fileBaseName = originalNameUtf8.split('.')[0].replace(/\s/g, '_')

    const timestamp = format(new Date(), 'dd-MM-yyyy-HH:mm:ss:mmm')
    const fileExtension = file.mimetype.split('/')[1]

    cb(null, `${timestamp}-${fileBaseName}-.${fileExtension}`)
  }
})

export const upload = multer({ storage })
