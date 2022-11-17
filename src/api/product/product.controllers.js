import { productService } from './product.service'

export const createProduct = async (req, res) => {
  try {
    const doc = await productService.createProduct(req.body)
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getByCondition = async (req, res) => {
  try {
    const condition = req.query.condition
    const price = req.query.price
    const products = await productService.getProductByCondition(
      condition,
      price
    )
    res.status(200).json(products)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const ProductController = {
  createProduct: createProduct,
  getByCondition: getByCondition,
}
