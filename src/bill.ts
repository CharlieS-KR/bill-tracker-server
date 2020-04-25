import Mongoose from 'mongoose'
import { PaymentMethods } from './constants'

const billSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: false
    },
    totalAmount: {
        type: Number,
        required: true
    },
    biWeeklyEmount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: PaymentMethods,
        required: true
    }
})

const Bill = Mongoose.model('Bill', billSchema)

export default Bill