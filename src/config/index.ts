import { config } from 'dotenv'

config()

const server_port = process.env.PORT || 4000
const db_url = process.env.MONGODB_URL || ''
const jwt_secret = process.env.JWT_SECRET || 'my_jwt_secret'
const fb_page_token = process.env.FB_PAGE_TOKEN || ''
const fb_verified_token = process.env.VERIFY_TOKEN || ''

export { server_port, db_url, jwt_secret, fb_page_token, fb_verified_token }
