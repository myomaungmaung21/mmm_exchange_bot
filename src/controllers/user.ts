import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { generateToken } from '../helper'
import { responseProps, UserProps } from '../interfaces'
import { compareSync } from 'bcrypt'
import { User } from '../models'

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error: any = new Error('signupUser failed')
      error.statusCode = 422
      throw error
    } else {
      const userData: UserProps = {
        local: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        }
      }
      const user = new User(userData)
      const result: any = await user.save()
      if (result) {
        const token = generateToken(result)
        const responseData: responseProps = {
          status: 1,
          message: 'signup successful!',
          access_token: token
        }
        res.status(201).json({ responseData })
      }
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

export const signinUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error: any = new Error('signupUser failed')
      error.statusCode = 422
      throw error
    } else {
      const user = await User.findOne({ 'local.email': req.body.email })
      if (user) {
        const correctPassword = compareSync(req.body.password, user.password)
        if (correctPassword) {
          const token = generateToken(user);
          const responseData: responseProps = {
            status: 1,
            message: 'Login successful!',
            access_token: token
          }
          res.status(200).json(responseData)
        }
        else {
          const error: any = new Error('Password incorrect!')
          error.statusCode = 422
          throw error
        }
      } else {
        const error: any = new Error('Your email does not exist!')
        error.statusCode = 422
        throw error
      }
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
