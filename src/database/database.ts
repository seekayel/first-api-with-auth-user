import { IDataBase } from "../interfaces/InterfaceDatabase";

const DataBase:IDataBase = {
  users: [
    {
      email:'williancard123@gmail.com',
      password:'1234',
      name:'william cardoso'
    },
    {
      email:'walace@gmail.com',
      password:'walace23',
      name:'walace cardoso'
    }
  ]
}

export class DatabaseManager{
  public static find(key: string , value: string){
    return DataBase[key].find((data: { email: string }) => data.email == value )
  }
}