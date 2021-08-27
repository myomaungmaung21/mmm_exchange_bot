import { model, Schema } from 'mongoose'
import mongoose from 'mongoose'

const currencySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    keyword: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })


export default model('currency', currencySchema)

