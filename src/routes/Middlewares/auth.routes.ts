import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
export class AuthMid{
  public  static handle(req: Request, res:Response, next: NextFunction){
    const {authorization} = req.headers
    if(authorization){
      const token = authorization.split(' ')[1]
      jwt.verify(token, 'teste', (err, dataToken) => {
        if(Object.keys(dataToken || {}).length != 0){
          next()
        } else {
          res.status(403).send("não foi possivel autenticar.")
        }
      })
    } else {
      res.status(400).send('erro na autenticacao.')
    }
  }
}