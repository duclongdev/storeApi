import { CartItem } from './cartItem.model'
export const getOne = async (req, res) => {
  const doc = await CartItem.findById(req.params.id).populate('product_id')
  res.status(200).json(doc)
}

export const CartItemController = {
  getOne: getOne,
}
