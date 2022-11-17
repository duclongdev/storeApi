import { Router } from 'express'
import { ProductController } from './product.controllers'

const router = Router()

router
  .route('/')
  .get(ProductController.getByCondition)
  .post(ProductController.createProduct)

export default router
