import express from 'express'
import { baseConfig } from './configs'
import customerRouter from './api/customer/customer.router'
import productRouter from './api/product/product.router'
import cartItemRouter from './api/cartItem/cartItem.router'
import cartRouter from './api/cart/cart.router'
import { connect } from './utils/db'
import { json, urlencoded } from 'body-parser'
import { ErrorHandle } from './middleware/errorHandle'

export const app = express()
app.use(json())

app.use('/api/customer', customerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/cartItem', cartItemRouter)
app.use(ErrorHandle)

export const start = async () => {
  try {
    await connect()
    app.listen(baseConfig.port, () => {
      console.log(`REST API on http://localhost:${baseConfig.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
