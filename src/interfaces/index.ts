
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

interface UserProps {
  local?: localProps
  facebook?: facebookProps
}

interface responseProps {
  status: number
  message: string
  data?: any
  access_token?: string
}

interface currencyProps {
  name: string
  keyword: string
  user: string
}

interface rateProps {
  from_currency: string
  to_currency: string
  sell: number
  buy: number
  user: string
}



export { UserProps, responseProps, currencyProps, rateProps }
