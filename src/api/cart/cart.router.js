import { Router } from 'express'
import { CartController } from './cart.controller'

const router = Router()
// router.route().get(CartController.getAll)
router.route('/:id').post(CartController.insertCartItem)

export default router
