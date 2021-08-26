// importing from third_party
import express from 'express'
import cors from 'cors'
import path from 'path'
//importing from db
import { connectDB } from './db'

//importing from config
import { server_port } from './config'

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json())

const startApp = () => {
  connectDB()
  app.listen(server_port, () => {
    console.log(`🌀Server is running at port ${server_port}`)
  })
}

startApp()
