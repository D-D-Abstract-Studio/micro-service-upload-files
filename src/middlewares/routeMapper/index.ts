import axios from 'axios'
import { Request, Response, NextFunction } from 'express'

import { ensureAuthenticated, getAuthToken } from './authService'

const baseURL = 'https://ecommerce-carretao.herokuapp.com/api'

const allowedRoutesERP = [
  { method: 'GET', path: '/category' },
  { method: 'GET', path: '/list-product' }
]

export const routeMapper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { method, path } = req

  const route = allowedRoutesERP.find(route => {
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

    axios.defaults.headers.common['Authorization'] = `Bearer ${getAuthToken()}`
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
        await ensureAuthenticated() // Re-authenticate and retry
        return routeMapper(req, res, next)
      }

      res.status(error.response?.status || 500).json({ message: error.message })
    } else {
      console.error('Unexpected error:', error)
      res.status(500).json({ error })
    }
  }
}
