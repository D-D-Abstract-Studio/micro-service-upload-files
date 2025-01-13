import { IUser } from '@/models/User'
import 'express-serve-static-core'

declare global {
  namespace Express {
    interface Request {
      user?: IUser
    }
  }
}
