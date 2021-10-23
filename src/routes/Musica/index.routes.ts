import express from 'express'
import { AuthMid } from '../Middlewares/auth.routes'
const musicRouter = express.Router()

musicRouter.get('/',AuthMid.handle, (req, res) => {
  res.json({message: 'ok , voce entrou na rota secreta.'})
})
export {musicRouter}