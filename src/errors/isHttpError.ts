import { HTTPError } from './httpError'

type ErrorWithStatus = {
  status: number
}

type ErrorWithMessage = {
  message: string
}

export const isHttpError = (err: unknown) =>
  err instanceof HTTPError ||
  (typeof (err as ErrorWithStatus).status === 'number' && typeof (err as ErrorWithMessage).message === 'string')
