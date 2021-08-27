import { model, Schema } from 'mongoose'
import mongoose from 'mongoose'

const rateSchema = new Schema({
    from_currency: {
        type: mongoose.Types.ObjectId,
        ref: 'currency'

    },
    to_currency: {
        type: mongoose.Types.ObjectId,
        ref: 'currency'
    },
    sell: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

export default model('rate', rateSchema)