import { createConnection } from 'mongoose'

import { dbMongo } from '../config'

export const azePlastDB = createConnection(dbMongo.dbUrl, {
  maxPoolSize: 10
})

azePlastDB.on('connecting', () => console.log('Connecting to the database'))
azePlastDB.on('error', err => console.error('🔴 Error connecting to the database', err))
azePlastDB.on('disconnected', () => console.log('🔴 Disconnected from the database'))
