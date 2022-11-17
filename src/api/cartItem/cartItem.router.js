import { Router } from 'express'
import { CartItemController } from './cartItem.controller'

const router = Router()
router.route('/:id').get(CartItemController.getOne)
export default router
