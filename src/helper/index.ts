import { verify, sign } from 'jsonwebtoken'
import { jwt_secret } from '../config'


export const VerifyToken = (token: string) => {
  let decoded_token = verify(token, jwt_secret)
  return decoded_token
}

export const generateToken = (user: any) => {
  let token = sign({ user }, jwt_secret, { expiresIn: '1d' })
  return token
}
