import { findCartIdFromCustomer } from '../customer/customer.service'
import { getProductById } from '../product/product.service'
import { CartItemService } from '../cartItem/cartItem.service'
import mongoose from 'mongoose'

export const createCartItem = async (customerId, products) => {
  const cartId = await findCartIdFromCustomer(customerId)

  let dataset = new Array()

  for (const item of products) {
    let cartItem = null
    const product = await getProductById(item.product_id)
    const CartCurrent = await getCartItemByProduct(item.product_id, cartId)

    cartItem = CartCurrent
      ? await updateCartItem(item, CartCurrent, product.price)
      : await insertCartItem(item, product.price, cartId)

    const dataToReturnClient = convertData(cartItem, product)

    dataset.push(dataToReturnClient)
  }
  return dataset
}

const getCartItemByProduct = async (product_id, cartId) => {
  const doc = await CartItemService.getByProductId(product_id, cartId)

  return doc
}

async function updateCartItem(product, cartCurrent, price) {
  let totalAmount = 0
  const update = {
    quantity_wished: product.quantity_wished + cartCurrent.quantity_wished,
    total_amount: (totalAmount =
      (product.quantity_wished + cartCurrent.quantity_wished) * price),
  }

  const filter = { product_id: product.product_id, _id: cartCurrent._id }

  const doc = await CartItemService.findAndUpdate(filter, update)

  doc.quantity_wished += product.quantity_wished
  doc.total_amount = totalAmount

  return doc
}

async function insertCartItem(product, price, cartId) {
  const totalAmount = price * product.quantity_wished
  const dataToInsert = {
    quantity_wished: product.quantity_wished,
    total_amount: totalAmount,
    cart_id: cartId,
    product_id: new mongoose.Types.ObjectId(product.product_id),
  }

  const cartItem = await CartItemService.create(dataToInsert)
  return cartItem
}

function convertData(cartItem, product) {
  return {
    quantity_wished: cartItem.quantity_wished,
    total_amount: cartItem.total_amount,
    cart_id: cartItem.cart_id.toString(),
    product: product,
  }
}

export const cartService = {
  createCartItem: createCartItem,
}
