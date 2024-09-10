import { existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

import { format } from 'date-fns'
import multer from 'multer'

import { v4 as uuidv4 } from 'uuid'

const storageConfig = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const dir = resolve(__dirname, '..', 'uploads')

    if (!existsSync(dir)) {
      mkdirSync(dir)
    }

    cb(null, dir)
  },
  filename: (_req, file, cb) => {
    const datePart = format(new Date(), 'dd-MM-yyyy')
    const uniqueId = uuidv4()
    const fileExtension = file.mimetype.split('/')[1]

    cb(null, `${datePart}-${uniqueId}.${fileExtension}`)
  }
})

export const uploadAndProcessImages = multer({ storage: storageConfig }).array('files')
