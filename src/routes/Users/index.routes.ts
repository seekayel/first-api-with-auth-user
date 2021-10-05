import express from 'express'
import { FindUserCaseController } from '../../useCase/FindUser/FindUseCaseController'
const userRouter = express.Router()

userRouter.get('/:email', FindUserCaseController.handle)

export {userRouter}