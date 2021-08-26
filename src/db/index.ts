import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { db_url } from '../config'
dotenv.config()

export const connectDB = () => {
  try {
    mongoose
      .connect(db_url, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log(`⏳DB connected.`)
      })
      .catch(error => {
        throw error
      })
  } catch (error) {
    console.log(`👿DB disconnected with " ${error.message} "`)
  }
}
