import { DatabaseManager } from "../../database/database";

export class FindUserCase{
 public static findUser( email: string){
    return  DatabaseManager.find('users', email)
  }
}