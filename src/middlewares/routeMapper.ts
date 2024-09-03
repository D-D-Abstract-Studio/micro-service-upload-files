import axios from 'axios'
import { Request, Response, NextFunction } from 'express'

import { Auth } from '@/types/Auth'

let token = ''
let tokenExpiration = 0
const baseURL = 'https://ecommerce-carretao.herokuapp.com/api'

const authCredentials = {
  email: process.env.ERP_EMAIL || '',
  password: process.env.ERP_PASSWORD || ''
}

const allowedRoutes = [
  { method: 'GET', path: '/category' },
  { method: 'GET', path: '/list-product' }
]

export const routeMapper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { method, path } = req

  const route = allowedRoutes.find(route => {
    const routePath = route.path.replace(/:\w+/g, '[^/]+')
    const regex = new RegExp(`^${routePath}$`)

    return route.method === method && regex.test(path)
  })

  if (!route) {
    res.status(403).json({ message: 'Route not allowed' })
    return
  }

  try {
    await ensureAuthenticated()

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const erpResponse = await axios({
      method,
      url: `${baseURL}${path}`,
      data: req.body
    })

    res.status(erpResponse.status).json(erpResponse.data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message)
      if (error.response?.status === 401) {
        await login()
        return routeMapper(req, res, next)
      }

      res.status(error.response?.status || 500).json({ message: error.message })
    } else {
      console.error('Unexpected error:', error)
      res.status(500).json({ error })
    }
  }
}

async function login() {
  const response = await axios.post<Auth>(`${baseURL}/auth`, authCredentials, {
    headers: { 'Content-Type': 'application/json' }
  })

  token = response.data.token
  tokenExpiration = Date.now() + 12 * 60 * 60 * 1000 // Token expira em 12 horas
}

async function ensureAuthenticated() {
  if (!token || Date.now() >= tokenExpiration) {
    await login()
  }
}
