// importing from third_party
import express from 'express'
import cors from 'cors'
import path from 'path'
import favicon from 'express-favicon'
//importing from db
import { connectDB } from './db'

//importing from config
import { server_port } from './config'

const app = express()

app.use(cors())

app.use('', express.static(path.join(__dirname, '..', 'public')))
app.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')))
app.use(express.json())

const startApp = () => {
  connectDB()
  app.listen(server_port, () => {
    console.log(`🌀Server is running at port ${server_port}`)
  })
}

startApp()
