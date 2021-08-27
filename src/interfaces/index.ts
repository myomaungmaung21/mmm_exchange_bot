interface UserProps {
  local?: localProps
  facebook?: facebookProps
}

interface localProps {
  username?: string
  email?: string
  password?: string
  emailVerified?: boolean
}

interface facebookProps {
  id?: string
  token?: string
  email?: string
  name?: string
}

interface responseProps {
  status: number
  message: string
  data?: any
  access_token?: string
}

export { UserProps, responseProps }
