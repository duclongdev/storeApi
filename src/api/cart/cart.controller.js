import { cartService } from './cart.service'

export const insertCartItem = async (req, res) => {
  try {
    const products = standardizeData(req.body)
    const customerId = req.params.id
    const cartItem = await cartService.createCartItem(customerId, products)
    res.status(200).json(cartItem)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

function standardizeData(dataset) {
  const result = dataset
  for (const data of result) {
    data.quantity_wished = Number(data.quantity_wished)
  }
  return result
}

export const CartController = {
  insertCartItem: insertCartItem,
}
