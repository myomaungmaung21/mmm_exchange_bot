import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  error: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data, message } = error
  const statusCode = error.statusCode
  res.status(statusCode).json({ data, message })
  next()
}
