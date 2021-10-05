import express from 'express'
import { userRouter } from './Users/index.routes'
const routes = express.Router()

routes.use('/users', userRouter)
export {routes}