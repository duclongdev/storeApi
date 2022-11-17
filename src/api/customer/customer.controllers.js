import { CustomerService } from './customer.service'
import { Product } from '../product/product.model'
import { CartItemService } from '../cartItem/cartItem.service'

export const createCustomer = async (req, res) => {
  try {
    const doc = await CustomerService.createCustomer(req.body)
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getProducts = async (req, res) => {
  try {
    const params = {
      offset: req.query.offset,
      limit: req.query.limit,
      customerId: req.params.id,
    }

    const cartItems = await CartItemService.getFromOffsetToLimit(params)
    res.status(200).json({ products: { cartItems } })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
export const getCustomerById = async (req, res, next) => {
  try {
    const doc = await CustomerService.getById(req.params.id)
    res.send('debug')
  } catch (error) {
    if (error.message === 'not') {
      next({ status: 400, message: 'not found' })
    } else {
      next({ status: 500, message: '' })
    }
  }
}

// async function getProductsFromCart(products) {
//   const result = new Array()
//   for (const item of products) {
//     const product = await Product.findById(item.product_id)
//     result.push(product)
//   }
//   return result
// }
export const crudController = {
  createCustomer: createCustomer,

  getProducts: getProducts,
}
