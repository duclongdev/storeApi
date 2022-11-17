import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema({
  product_name: {
    type: String,
    require: true,
    maxlength: 100,
  },
  type: {
    type: String,
    require: true,
    maxlength: 20,
  },
  size: {
    type: String,
    require: true,
    maxlength: 3,
  },
  quantity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
})

export const Product = mongoose.model('Product', productSchema)
