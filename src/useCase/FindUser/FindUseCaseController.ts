import {FindUserCase} from './FindUserCase'
import e, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export class FindUserCaseController{
   constructor(){
    
  }
  handle(req:Request, res:Response){
    const {email, password} = req.body
    
    const response_find = FindUserCase.findUser(email)
    if(response_find != undefined){
      if(password == response_find.password){
        jwt.sign({email, id:123}, 'teste', {expiresIn: 60 }, (err, token) => {
          
          res.json({ token})
        })
        return;
      }
      return res.status(401).json({ message: 'password incorrect.'})
    } else {
      return res.status(404).json({
        message: 'email not found.'
      })
    }
  }
}