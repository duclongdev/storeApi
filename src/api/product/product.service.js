import { Product } from './product.model'

export const createProduct = async (product) => {
  const newProduct = await Product.create(product)
  return newProduct
}
export const getProductByCondition = async (condition, price) => {
  switch (condition) {
    case 'LESS_THAN':
      return getByLessThanPrice(price)
    case 'GREATER_THAN':
      return getByGreaterThanPrice(price)
    case 'EQUAL':
      return getByEqualPrice(price)
    default:
      return null
  }
}

async function getByLessThanPrice(price) {
  try {
    const doc = await Product.find({ price: { $lte: price } })
    return doc
  } catch (e) {
    console.log(e)
  }
}

async function getByGreaterThanPrice(price) {
  try {
    const doc = await Product.find({ price: { $gte: price } })
    return doc
  } catch (e) {
    console.log(e)
    res.status(400).end()
  }
}

async function getByEqualPrice(price) {
  try {
    const doc = await Product.find({ price: { $eq: price } })
    return doc
  } catch (e) {
    console.log(e)
  }
}

export const getProductById = async (productId) => {
  return Product.findById(productId)
}
export const productService = {
  createProduct: createProduct,
  getProductByCondition: getProductByCondition,
}
