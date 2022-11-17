import mongoose from 'mongoose'
const { Schema } = mongoose
const customerSchema = new Schema({
  customer_name: {
    type: String,
    require: true,
    trim: true,
    maxlength: 50,
  },
  address: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  phone_no: {
    type: String,
    trim: true,
    maxlength: 20,
    require: true,
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  },
})

export const Customer = mongoose.model('Customer', customerSchema)
