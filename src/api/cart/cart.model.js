import { mongoose } from 'mongoose'
const { Schema } = mongoose
const cartSchema = new Schema({})

export const Cart = mongoose.model('Cart', cartSchema)
