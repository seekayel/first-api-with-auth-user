import express from 'express'
import { musicRouter } from './Musica/index.routes'
import { userRouter } from './Users/index.routes'
const routes = express.Router()

routes.use('/users', userRouter)
routes.use('/music', musicRouter)
export {routes}