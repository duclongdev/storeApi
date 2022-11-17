import mongoose from 'mongoose'

export { mongoose } from 'mongoose'
const { Schema } = mongoose
const cartSchema = new Schema(
  {
    quantity_wished: {
      type: Number,
      require: true,
    },
    total_amount: {
      type: Number,
    },
    cart_id: {
      type: Schema.Types.ObjectId,
      ref: 'Cart',
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  {
    timestamps: true,
  }
)
export const CartItem = mongoose.model('CartItem', cartSchema)
