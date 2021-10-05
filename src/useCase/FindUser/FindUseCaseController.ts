import {FindUserCase} from './FindUserCase'
import { Request, Response } from 'express'

export class FindUserCaseController{

  public static  handle(req:Request, res:Response){
    const {email} = req.params
    const response_find = FindUserCase.findUser(email)
    if(response_find != undefined){
      res.statusCode = 200
      return res.json(response_find)
    } else {
      res.statusCode = 404
      return res.json({
        message: 'email not found.'
      })
    }
  }
}