import { Cart } from '../cart/Cart.model'
import { Customer } from './customer.model'
import mongoose, { Error } from 'mongoose'

export const createCustomer = async (customer) => {
  const cart = await Cart.create(
    new Cart({ _id: new mongoose.Types.ObjectId() })
  )
  const customerDoc = await Customer.create({ ...customer, cart: cart._id })
  return customerDoc
}

export const findCartIdFromCustomer = async (customerId) => {
  const customer = await getById(customerId)
  return customer.cart
}
const getById = async (customerId) => {
  const doc = Customer.find({_id: customerId});
  if(doc._id === undefined){
    throw new Error("notFound")
  }
  return doc
}  

export const CustomerService = {
  createCustomer: createCustomer,
  getById: getById,
}
