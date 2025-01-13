import type { ErrorRequestHandler } from 'express'

import { ZodError } from 'zod'
import { AxiosError } from 'axios'

export const exceptionValidation: ErrorRequestHandler = async (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      errors: err.errors.map(error => `${error.path} ${error.message}`)
    })
  }

  if (err instanceof AxiosError) {
    return res.status(err.response?.status || 500).json({
      errors: err.response?.data
    })
  }

  return res.status(500).json({
    errors: [err.message]
  })
}
