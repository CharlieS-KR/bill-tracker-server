import Mongoose from 'mongoose'
import { PaymentMethods, PaymentCategories } from './constants'

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
        type: String,
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
    biWeeklyAmount: {
        type: Number,
        required: false
    },
    paymentMethod: {
        type: PaymentMethods,
        required: true
    },
    category: {
        type: PaymentCategories,
        required: false
    }
})

const Bill = Mongoose.model('Bill', billSchema)

export default Bill