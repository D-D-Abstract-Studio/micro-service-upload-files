import { createConnection } from 'mongoose'

import { MONGO_URL } from '../config'

export const unipConnect = createConnection(MONGO_URL, {
  maxPoolSize: 10
})

unipConnect.on('connecting', () => console.log('Connecting to the database'))
unipConnect.on('error', err => console.error('🔴 Error connecting to the database', err))
unipConnect.on('disconnected', () => console.log('🔴 Disconnected from the database'))
