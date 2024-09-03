import type { ErrorRequestHandler } from 'express'

import { isHttpError } from '@/errors'

export const exception: ErrorRequestHandler = async (err, req, res, _next) => {
  const status = isHttpError(err) ? err.status : 500

  const message = err.message

  res.status(status).json({ errors: [message] })
}
