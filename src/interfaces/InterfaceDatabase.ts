import { IUser } from "./InterfaceUser";

export interface IDataBase {
  users: Array<IUser>
  [id:string]: any
}