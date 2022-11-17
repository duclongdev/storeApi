import { Router } from 'express'
import { crudController, getCustomerById } from './customer.controllers'

const router = Router()

router.route('/').post(crudController.createCustomer)

router.route('/:id').get(getCustomerById)

export default router
