import express from 'express'
import { FindUseCaseCrontrollerIns } from '../../useCase/FindUser'
const userRouter = express.Router()

userRouter.post('/auth', FindUseCaseCrontrollerIns.handle)

export {userRouter}