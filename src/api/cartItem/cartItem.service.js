import { CustomerService } from '../customer/customer.service'
import { CartItem } from './cartItem.model'

export const create = async (cartItem) => {
  const doc = await CartItem.create(cartItem)
  return doc
}
export const findAndUpdate = async (filter, update) => {
  const doc = await CartItem.findOneAndUpdate(filter, update)

  return doc
}

const getByProductId = async (productId, cartId) => {
  const doc = await CartItem.findOne({ product_id: productId, cart_id: cartId })
  console.log(doc)
  return doc
}

const getFromOffsetToLimit = async (data) => {
  const customer = CustomerService.getById(data.getById)
  const doc = CartItem.find({ cart_id: customer.cart })
    .skip(data.offset)
    .limit(data.limit)
    .populate('product')
  return doc
}
export const CartItemService = {
  create: create,
  findAndUpdate: findAndUpdate,
  getByProductId: getByProductId,
  getFromOffsetToLimit: getFromOffsetToLimit,
}
