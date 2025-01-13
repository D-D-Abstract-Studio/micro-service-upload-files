import express from 'express'

import cors from 'cors'
import morgan from 'morgan'

import { exception, exceptionValidation, notFound } from './middlewares'

import { router } from './router'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
)
app.options('*', cors())
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])

app.use(router)

app.use(notFound)
app.use(exceptionValidation)
app.use(exception)

export default app
