import { sign } from 'jsonwebtoken'

export const generateToken = (id: string) => {
  const token = sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '1d'
  })
  return token
}
