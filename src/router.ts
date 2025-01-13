import { Router } from 'express'

import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export const router = Router()

const routerModules = readdirSync(join(__dirname, 'modules')).filter(f => f !== 'shared')

;(async () => {
  for (const routerModule of routerModules) {
    router.use(`/${routerModule}`, (await import(join(__dirname, 'modules', routerModule, 'router'))).default)
  }
})()

router.get('/', (_req, res) => {
  res.send('API is running 🚀')
})
