import { Response, NextFunction } from 'express'
import { VerifyToken } from '../helper'

export const isAuthenticated = (
  req: any,
  _res: Response,
  next: NextFunction
) => {
  try {
    const auth_header = req.get('Authorization')

    if (auth_header) {
      const token: string = auth_header.split(' ')[1]
      const decoded_token: any = VerifyToken(token)
      if (decoded_token) {
        req.user_id = decoded_token.user._id
        next()
      } else {
        const error: any = new Error('Unauthorized User!')
        error.statusCode = 401
        throw error
      }
    } else {
      const error: any = new Error('Unauthorized User!')
      error.statusCode = 401
      throw error
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
