import axios from 'axios'
import { Auth } from '@/types/Auth'

const baseURL = 'https://ecommerce-carretao.herokuapp.com/api'
const authCredentials = {
  email: process.env.ERP_EMAIL || '',
  password: process.env.ERP_PASSWORD || ''
}

let token = ''
let tokenExpiration = 0

export const login = async () =>
  await axios
    .post<Auth>(`${baseURL}/auth`, authCredentials, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      token = response.data.token
      tokenExpiration = Date.now() + 12 * 60 * 60 * 1000 // Token expira em 12 horas
    })

export async function ensureAuthenticated(): Promise<void> {
  if (!token || Date.now() >= tokenExpiration) {
    await login()
  }
}

export function getAuthToken(): string {
  return token
}
