import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
export class AuthMid{
  public  static handle(req: Request, res:Response, next: NextFunction){
    const {authorization} = req.headers
    if(authorization){
      const token = authorization.split(' ')[1]
      jwt.verify(token, 'teste', (err, dataToken) => {
        if(err){
          res.status(403).json({message: "não foi possivel autenticar."})
        } else {
          next()
        }
      })
    } else {
      res.status(400).json({message: "erro na autenticacao."})
    }
  }
}